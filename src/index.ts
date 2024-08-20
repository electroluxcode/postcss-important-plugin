import type { Rule, PluginCreator } from 'postcss';

function ruleHandler(rule: Rule) {
  console.log("rule:", rule)
  rule.nodes.forEach((node) => {
    if (node.type === 'decl') {
      node.important = true;
    }
    if (node.type === 'rule') {
      ruleHandler(node);
    }
  })
}

const plugin: PluginCreator<any> = () => {
  return {
    Root: (root) => {

      root.walkRules(function (rule) {
        // Transform each rule here
        rule.walkDecls(function (decl) {
         
          
          if(!decl.value.includes("!important")){
              decl.value = decl.value + " !important"
          }
        })
      })
    },
    postcssPlugin: 'postcss-important-plugin'
  }
}

plugin.postcss = true;

export default plugin;