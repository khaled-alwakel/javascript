/*
*   Modifiers => Flags
*    i => case-insensitive
*    g => global
*    m => Multi lines

*   [[[Ranges]]]

*   (x,y) => X Or Y
*   [0-9] => 0 To 9
*   [^0-9] => Any Character Not 0 To 9
*   [a-z] => small letters
*   [^a-z] => not small letters
*   [A-Z] => capital letters
*   [^A-Z] =>  not capital letters
*   [a-zA-Z] =>lettersCapsAndSmall
*   [^a-zA-Z]  =>not lettersCapsAndSmall
*   [a-zA-Z0-9]  =>lettersCapsAndSmall and numbers  (like \w ==>small w)
*   [^a-zA-Z0-9]  =>not lettersCapsAndSmall and numbers (like \W ==> cap W) 
*   [abc]  => particular char
*   [^abc] => not those chars

    [[[characters]]]
*    . => matches any character, except newline or other line terminators.
*    \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
*    \W => matches Non word characters
*    \d => matches all digits from 0 to 9.
*    \D => matches non-digit characters.
*    \s => matches whitespace character.
*    \S => matches non whitespace character.
*    \b => matches at the beginning or end of a word.
*    \B => matches NOT at the beginning/end of a word.

    [[[Quantifiers]]]
*    +    => One Or More
*    *    => zero or more
*    ?    => zero or one
*    {x}   => Number of
*    {x,y} => Range
*    {x,}  => At Least x
*    $  => End With Something
*    ^  => Start With Something
*   ?= => Followed By Something
*   ?! => Not Followed By Something
*/
