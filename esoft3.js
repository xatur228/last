function isValidParentheses(s) 
{
    const stack = [];
    const some = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) 
    {
        if (some[char]) 
        {
            stack.push(char);
        } else
         {
            if (stack.length === 0) 
            {
                return false;
            }
            const lastBracket = stack.pop();
            if (some[lastBracket] !== char)
            {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true