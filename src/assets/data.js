export const test = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>this is page1</title>
</head>
<body>
    <p>这是一个测试的页面</p>
    <script>
        const code = document.documentElement.outerHTML;
        console.log(code)
    </script>
</body>
</html>
`