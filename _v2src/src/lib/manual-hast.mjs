import GithubSlugger from 'github-slugger';

function element(tagName, className, children) {
  return { type: 'element', tagName, properties: { className: [className] }, children };
}

// Satteri hast plugin for the manual:
//   root > [h2, ...content]  ->  root > section.docsec > [h2, div.prose > content]
//   table                    ->  div.reftable-wrap > table
//   h2/h3 id                 =  github-slugger slug with runs of "-" collapsed to one
export default function manualHast() {
  const slugger = new GithubSlugger();
  return {
    name: 'manual-hast',
    before(root, ctx) {
      const children = [];
      let prose = null;
      for (const node of root.children) {
        if (node.type === 'element' && node.tagName === 'h2') {
          prose = element('div', 'prose', []);
          children.push(element('section', 'docsec', [node, prose]));
        } else if (prose) {
          prose.children.push(node);
        } else {
          children.push(node);
        }
      }
      ctx.replaceNode(root, { type: 'root', children });
    },
    element: [
      {
        filter: ['h2', 'h3'],
        visit(node, ctx) {
          ctx.setProperty(node, 'id', slugger.slug(ctx.textContent(node)).replace(/-+/g, '-'));
        },
      },
      {
        filter: ['table'],
        visit(node, ctx) {
          ctx.wrapNode(node, element('div', 'reftable-wrap', []));
        },
      },
    ],
  };
}
