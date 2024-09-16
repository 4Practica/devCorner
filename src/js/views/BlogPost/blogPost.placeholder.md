# My Markdown Document

## 1. Headers
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

## 2. Emphasis
- *Italicized text*
- **Bold text**
- ***Bold and italicized text***

## 3. Blockquotes
> This is a blockquote. It can span multiple lines if necessary.
> "The only limit to our realization of tomorrow is our doubts of today."
> 
> — Franklin D. Roosevelt

## 4. Lists

### Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordered List
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

### Task List
- [x] Task 1 completed
- [ ] Task 2 not completed
- [ ] Task 3 not completed

## 5. Links
- [Inline Link](https://example.com)
- [Reference Link][ref-link] y algo de texto por acá
- [Link with Title](https://example.com "Example Site")

[ref-link]: https://example.com

## 6. Images
![Alt Text](https://via.placeholder.com/150 "Placeholder Image")
![Inline Image](https://via.placeholder.com/100x50)
![Reference Image][image-ref]

[image-ref]: https://via.placeholder.com/200x100

## 7. Code

### Inline Code

Eso no es código en linea pero `const camelCase = "Esto es una prueba"`
### Code Block (Indented)
```python
def esto_es_una_funciom:
  nombre = "Esto es un nombre"
  apellido = False
  altura = lambda a: print(a)
  if apellido:
    print("Saluedossss", True, None)
  diccionario = {
    "nombr": "otra vez"  
    "numero": 23423
  }
```

### Code Block (Fenced)

# My Markdown Document

## 1. Headers
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

## 2. Emphasis
- *Italicized text*
- **Bold text**
- ***Bold and italicized text***

## 3. Blockquotes
> This is a blockquote. It can span multiple lines if necessary.

## 4. Lists

### Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordered List
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

### Task List
- [x] Task 1 completed
- [ ] Task 2 not completed
- [ ] Task 3 not completed

## 5. Links
- [Inline Link](https://example.com)
- [Reference Link][ref-link]
- [Link with Title](https://example.com "Example Site")

[ref-link]: https://example.com

## 6. Images
![Alt Text](https://via.placeholder.com/150 "Placeholder Image")
![Inline Image](https://via.placeholder.com/100x50)
![Reference Image][image-ref]

[image-ref]: https://via.placeholder.com/200x100

## 7. Code

### Inline Code
Here is some `inline code`.

### Code Block (Indented)
    function add(a, b) {
        return a + b;
    }

### Code Block (Fenced)


## 8. Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
| Row 3    | Data 5   | Data 6   |

## 9. Horizontal Rule
---

## 10. Inline HTML
This is a paragraph with <u>underlined</u> text using HTML.

## 11. Footnotes
This is some text with a footnote.[^1]

[^1]: This is the footnote text.

## 12. Definition Lists
Term 1
: Definition of the first term.

Term 2
: Definition of the second term.

## 13. Strikethrough
~~This text is struck through.~~

## 14. Escape Characters
Use a backslash to escape special characters, like \* or \#.

## 15. Emojis
:smile: :thumbsup: :rocket:

## 16. Autolinks
- <https://example.com>
- <email@example.com>

## 17. Collapsible Section
<details>
  <summary>Click to expand!</summary>
  
  This is a collapsible section. You can put any Markdown content inside.
  
</details>