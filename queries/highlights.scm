;; Main constructs
(comment) @comment
(string_literal) @string
(number_literal) @number
(boolean_literal) @boolean
(keyword) @keyword
(operator) @operator
(variable) @variable

;; Punctuation
(expression ("," @punctuation.delimiter))
(expression ("(" @punctuation.bracket) (")" @punctuation.bracket))

;; Functions
(expression (atom (symbol) @function))
