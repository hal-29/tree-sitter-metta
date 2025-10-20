;; Comments
(comment) @comment

;; Literals inside atoms
(atom (string_literal) @string)
(atom (number_literal) @number)
(atom (boolean_literal) @boolean)
(atom (char_literal) @character)
(atom (variable) @variable)
(atom (symbol) @identifier)

;; Keywords and operators
(atom (keyword) @keyword)
(atom (operator) @operator)
(atom (type_operator) @type)
(expression (atom (keyword)) @keyword.function)

;; Punctuation
("(" @punctuation.bracket)
(")" @punctuation.bracket)
("," @punctuation.delimiter)

;; Function-like symbols in expressions
(expression (atom (symbol) @function))
