<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <title>Inertia 範例</title>

    <!-- Styles -->
    <link href="/css/tailwindcss.css" rel="stylesheet">

    <!-- Scripts -->
    <script src="/js/app.js" defer></script>
</head>

<body class="bg-purple-100">
    @inertia
</body>
</html>
