module.exports = grammar({
  name: "metta",

  extras: ($) => [/\s/, $.comment],

  rules: {
    source_file: ($) => seq(optional($.shebang), repeat($._expression)),

    shebang: (_) => /#!.*\n/,

    _expression: ($) => choice($.atom, $.expression, $.immediate_expression),

    immediate_expression: ($) => seq("!", $._expression),

    expression: ($) => seq("(", repeat($._expression), ")"),

    atom: ($) =>
      choice(
        $.variable,
        $.string_literal,
        $.number_literal,
        $.char_literal,
        $.boolean_literal,
        $.keyword,
        $.operator,
        $.type_operator,
        $.symbol
      ),

    symbol: (_) => /[a-zA-Z_?+\/&|=<>.!~%^][a-zA-Z0-9_?+\/&|=<>.!~%^]*/,

    variable: ($) => seq("$", $.symbol),

    string_literal: (_) => seq('"', /([^"\\]|\\.)*/, '"'),

    number_literal: (_) => {
      const digits = /[0-9]+/;
      const exponent = seq(/[eE]/, optional(/[+-]/), digits);

      return token(
        seq(
          optional(/[+-]/),
          choice(
            seq(digits, ".", optional(digits), optional(exponent)),
            seq(".", digits, optional(exponent)),
            seq(digits, exponent),
            digits
          )
        )
      );
    },

    char_literal: (_) => seq("#", choice(/\./, /[^\\]/)),

    boolean_literal: (_) => choice("True", "False"),

    comment: (_) => token(choice(seq(";", /.*/), seq("//", /.*/))),

    keyword: ($) =>
      choice(
        "and",
        "or",
        "not",
        "xor",
        "sin-math",
        "cos-math",
        "tan-math",
        "asin-math",
        "acos-math",
        "atan-math",
        "pow-math",
        "sqrt-math",
        "abs-math",
        "log-math",
        "round-math",
        "trunc-math",
        "floor-math",
        "ceil-math",
        "isnan-math",
        "isinf-math",
        "add-atom",
        "remove-atom",
        "get-atoms",
        "new-space",
        "get-type",
        "get-type-space",
        "get-metatype",
        "cons-atom",
        "decons-atom",
        "car-atom",
        "cdr-atom",
        "index-atom",
        "size-atom",
        "if",
        "if-equal",
        "if-error",
        "case",
        "switch",
        "function",
        "return",
        "chain",
        "let",
        "let*",
        "for-each-in-atom",
        "match",
        "match-types",
        "match-type-or",
        "unify",
        "atom-subst",
        "sealed",
        "type-cast",
        "is-function",
        "new-state",
        "get-state",
        "change-state!",
        "superpose",
        "collapse",
        "collapse-bind",
        "superpose-bind",
        "unique",
        "union",
        "intersection",
        "subtraction",
        "unique-atom",
        "union-atom",
        "intersection-atom",
        "subtraction-atom",
        "empty",
        "@doc",
        "@desc",
        "@params",
        "@param",
        "@return",
        "@type",
        "@item",
        "@doc-formal",
        "@kind",
        "help!",
        "help-param!",
        "get-doc",
        "get-doc-single-atom",
        "get-doc-atom",
        "get-doc-function",
        "get-doc-params",
        "undefined-doc-function-type",
        "Error",
        "ErrorType",
        "return-on-error",
        "id",
        "nop",
        "flip",
        "first-from-pair",
        "format-args",
        "map-atom",
        "filter-atom",
        "foldl-atom",
        "min-atom",
        "max-atom",
        "noreduce-eq",
        "eval",
        "evalc",
        "quote",
        "unquote",
        "add-reduct",
        "capture",
        "pragma!",
        "import!",
        "include",
        "register-module!",
        "git-module!",
        "mod-space!",
        "print-mods!",
        "println!",
        "trace!",
        "random-int",
        "random-float",
        "metta",
        "bind!",
        "assertEqual",
        "assertAlphaEqual",
        "assertEqualToResult",
        "assertAlphaEqualToResult"
      ),

    operator: ($) =>
      choice(
        "+ ",
        "-",
        "*",
        "/",
        "%",
        "=",
        "==",
        "<",
        ">",
        "<= ",
        ">=",
        "=alpha"
      ),

    type_operator: ($) => choice(":", "->"),
  },
});
