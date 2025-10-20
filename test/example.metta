==================
Shebang
==================

#!/usr/bin/env metta

------------------

(source_file (shebang))

==================
Comments
==================

; This is a semicolon comment

------------------

(source_file (comment) (comment))

; ==================
; Expressions
; ==================

(())
(a b c)
(a (b c) d)

; ------------------

(source_file
  (expression (expression))
  (expression (atom (symbol)) (atom (symbol)) (atom (symbol)))
  (expression (atom (symbol)) (expression (atom (symbol)) (atom (symbol))) (atom (symbol))))

; ==================
; Atoms
; ==================

$x
"string"
123
#c
True

; ------------------

(source_file
  (atom (variable (symbol)))
  (atom (string_literal))
  (atom (number_literal))
  (atom (char_literal))
  (atom (boolean_literal)))

; ==================
; Keywords
; ==================

(and or not)
(let* (($x 1) ($y 2)) (+ $x $y))

------------------

(source_file
  (expression (atom (keyword)) (atom (keyword)) (atom (keyword)))
  (expression
    (atom (keyword))
    (expression
      (expression (atom (variable (symbol))) (atom (number_literal)))
      (expression (atom (variable (symbol))) (atom (number_literal))))
    (expression
      (atom (operator))
      (atom (variable (symbol)))
      (atom (variable (symbol))))))

; ==================
; Operators
; ==================

(+ 1 2)
(= a b)

; ------------------

(source_file
  (expression (atom (operator)) (atom (number_literal)) (atom (number_literal)))
  (expression (atom (operator)) (atom (symbol)) (atom (symbol))))

; ==================
; Type operators
; ==================

(: a A)
(-> A B)

; ------------------

(source_file
  (expression (atom (type_operator)) (atom (symbol)) (atom (symbol)))
  (expression (atom (type_operator)) (atom (symbol)) (atom (symbol))))

; ==================
; Immediate evaluation
; ==================

! (a b c)

; ------------------

(source_file
  (immediate_expression
    (expression (atom (symbol)) (atom (symbol)) (atom (symbol)))))
