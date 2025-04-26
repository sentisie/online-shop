
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">


<title>Installation - Laravel 10.x - The PHP Framework For Web Artisans</title>

<link rel="canonical" href="https://laravel.com/docs/12.x/installation">

<!-- Primary Meta Tags -->
<meta name="title" content="Installation - Laravel 10.x - The PHP Framework For Web Artisans">
<meta name="description" content="Laravel is a PHP web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://laravel.com/">
<meta property="og:title" content="Installation - Laravel 10.x - The PHP Framework For Web Artisans">
<meta property="og:description" content="Laravel is a PHP web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.">
<meta property="og:image" content="https://laravel.com/images/og/laravel-docs.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://laravel.com/">
<meta property="twitter:title" content="Installation - Laravel 10.x - The PHP Framework For Web Artisans">
<meta property="twitter:description" content="Laravel is a PHP web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.">
<meta property="twitter:image" content="https://laravel.com/images/og/laravel-docs.png">

<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
<link rel="manifest" href="/img/favicon/site.webmanifest">
<link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#ff2d20">
<link rel="shortcut icon" href="/img/favicon/favicon.ico">
<meta name="msapplication-TileColor" content="#ff2d20">
<meta name="msapplication-config" content="/img/favicon/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
<meta name="color-scheme" content="light">

<link rel="preload" href="/fonts/InstrumentSans.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
<link rel="preconnect" href="https://E3MIRNPJH5-dsn.algolia.net" crossorigin />

<link rel="preload" as="style" href="https://laravel.com/build/assets/app-BpBFBevo.css" /><link rel="modulepreload" href="https://laravel.com/build/assets/app-DsFpo0m6.js" /><link rel="modulepreload" href="https://laravel.com/build/assets/mediaQuery-Bm25Hv93.js" /><link rel="modulepreload" href="https://laravel.com/build/assets/module.esm-BKQTc33J.js" /><link rel="modulepreload" href="https://laravel.com/build/assets/docs-BJ6c096-.js" /><link rel="modulepreload" href="https://laravel.com/build/assets/theme-switcher-CvREX8Sp.js" /><link rel="stylesheet" href="https://laravel.com/build/assets/app-BpBFBevo.css" /><script type="module" src="https://laravel.com/build/assets/app-DsFpo0m6.js"></script><script type="module" src="https://laravel.com/build/assets/docs-BJ6c096-.js"></script>
    <!-- Fathom - beautiful, simple website analytics -->
    <script src="https://cdn.usefathom.com/script.js" data-site="DVMEKBYF" defer></script>
    <!-- / Fathom -->

    <!-- Clearbit -->
    <script async src="https://tag.clearbitscripts.com/v1/pk_97d2bf69f817feb07be42fcda1460119/tags.js" referrerpolicy="strict-origin-when-cross-origin"></script>


<script>
    const alwaysLightMode = false;
    const algolia_app_id = 'E3MIRNPJH5';
    const algolia_search_key = '1fa3a8fec06eb1858d6ca137211225c0';
    const version = '10.x';

    if (!alwaysLightMode) {
        if (localStorage.theme === 'dark' || (localStorage.theme === 'system' && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            document.documentElement.setAttribute("data-theme", "dark");
            document.documentElement.setAttribute("color-theme", "dark");
        }
    }
</script>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Set a CSS variable for the viewport width for the divider component
        document.documentElement.style.setProperty('--viewport-width', (document.body.clientWidth || 0)+'px');
    });

    window.addEventListener('resize', function () {
        document.documentElement.style.setProperty('--viewport-width', (document.body.clientWidth || 0)+'px');
    }, { passive: true });
</script>
    </head>
    <body class="font-sans antialiased text-sand-light-12 bg-sand-light-1 dark:bg-sand-dark-1">
        <div class="xl:px-0 mx-auto xl:max-w-[1400px] w-full max-w-full">
            <div class="relative xl:border-l xl:mx-auto bg-sand-light-1 dark:bg-sand-dark-1 xl:border-sand-light-7 xl:dark:border-sand-dark-6">
                <div id="nav-trigger" class="absolute left-0 top-32"></div>

<nav class="sticky top-0 z-99 px-4 xl:px-16 py-8 h-(--popover-top-offset) dark:bg-sand-dark-1 transition-transform duration-300 bg-sand-light-1 border-b border-transparent sticky-nav docs-nav">
    <div class="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-x-10 relative items-center h-full overflow-hidden">
    <ul class="flex items-start col-span-3 space-x-8 font-medium ">
            <li class="w-20 transition-transform duration-300 ease-in-out mr-18 text-laravel-red" id="nav-left">
                <a href="https://laravel.com" class="flex items-center w-20 aspect-[80/23]">
                    <svg class="w-full h-full"
    width="1280"
    height="308"
    viewBox="0 0 1280 308"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M50.2753 0H0V308.689H144.713V263.27H50.2753V0Z"
        fill="currentColor"
    />
    <path
        d="M322.209 130.973C315.796 120.684 306.688 112.602 294.883 106.718C283.081 100.84 271.201 97.8969 259.253 97.8969C243.798 97.8969 229.665 100.764 216.843 106.496C204.014 112.228 193.015 120.099 183.834 130.091C174.654 140.088 167.51 151.628 162.412 164.706C157.308 177.792 154.761 191.54 154.761 205.94C154.761 220.645 157.308 234.457 162.412 247.39C167.508 260.332 174.652 271.796 183.834 281.788C193.015 291.785 204.017 299.647 216.843 305.379C229.665 311.111 243.798 313.978 259.253 313.978C271.201 313.978 283.081 311.038 294.883 305.159C306.688 299.282 315.796 291.197 322.209 280.904V308.685H369.865V103.186H322.209V130.973ZM317.837 231.076C314.922 239.016 310.841 245.925 305.598 251.804C300.35 257.687 294.009 262.389 286.579 265.917C279.146 269.445 270.905 271.208 261.875 271.208C252.837 271.208 244.676 269.445 237.391 265.917C230.104 262.389 223.839 257.687 218.593 251.804C213.345 245.925 209.335 239.016 206.57 231.076C203.794 223.138 202.417 214.759 202.417 205.942C202.417 197.12 203.794 188.742 206.57 180.804C209.335 172.866 213.345 165.961 218.593 160.078C223.839 154.201 230.102 149.493 237.391 145.965C244.676 142.437 252.837 140.674 261.875 140.674C270.908 140.674 279.146 142.437 286.579 145.965C294.009 149.493 300.35 154.199 305.598 160.078C310.844 165.961 314.922 172.866 317.837 180.804C320.748 188.742 322.209 197.12 322.209 205.942C322.209 214.759 320.748 223.138 317.837 231.076Z"
        fill="currentColor"
    />
    <path
        d="M709.568 130.973C703.155 120.684 694.047 112.602 682.242 106.718C670.44 100.84 658.56 97.8969 646.612 97.8969C631.157 97.8969 617.024 100.764 604.202 106.496C591.373 112.228 580.374 120.099 571.193 130.091C562.013 140.088 554.869 151.628 549.771 164.706C544.666 177.792 542.12 191.54 542.12 205.94C542.12 220.645 544.666 234.457 549.771 247.39C554.867 260.332 562.01 271.796 571.193 281.788C580.374 291.785 591.375 299.647 604.202 305.379C617.024 311.111 631.157 313.978 646.612 313.978C658.56 313.978 670.44 311.038 682.242 305.159C694.047 299.282 703.155 291.197 709.568 280.904V308.685H757.224V103.186H709.568V130.973ZM705.198 231.076C702.283 239.016 698.202 245.925 692.959 251.804C687.711 257.687 681.37 262.389 673.94 265.917C666.507 269.445 658.266 271.208 649.236 271.208C640.198 271.208 632.037 269.445 624.752 265.917C617.465 262.389 611.2 257.687 605.954 251.804C600.706 245.925 596.696 239.016 593.931 231.076C591.155 223.138 589.778 214.759 589.778 205.942C589.778 197.12 591.155 188.742 593.931 180.804C596.696 172.866 600.706 165.961 605.954 160.078C611.2 154.201 617.463 149.493 624.752 145.965C632.037 142.437 640.198 140.674 649.236 140.674C658.269 140.674 666.507 142.437 673.94 145.965C681.37 149.493 687.711 154.199 692.959 160.078C698.205 165.961 702.283 172.866 705.198 180.804C708.109 188.742 709.57 197.12 709.57 205.942C709.568 214.759 708.107 223.138 705.198 231.076Z"
        fill="currentColor"
    />
    <path
        d="M1280 1.12315e-05H1232.35V308.689H1280V1.12315e-05Z"
        fill="currentColor"
    />
    <path
        d="M407.466 308.689H455.117V150.486H536.876V103.192H407.466V308.689Z"
        fill="currentColor"
    />
    <path
        d="M948.281 103.192L888.386 260.557L828.489 103.192H780.224L858.441 308.689H918.331L996.546 103.192H948.281Z"
        fill="currentColor"
    />
    <path
        d="M1100.48 97.908C1042.13 97.908 995.937 146.279 995.937 205.944C995.937 271.9 1040.64 313.98 1106.59 313.98C1143.5 313.98 1167.06 299.745 1195.85 268.746L1163.66 243.621C1163.64 243.646 1139.36 275.802 1103.1 275.802C1060.96 275.802 1043.22 241.533 1043.22 223.803H1201.32C1209.62 155.913 1165.37 97.908 1100.48 97.908ZM1043.35 188.085C1043.71 184.13 1049.2 136.086 1100.1 136.086C1151.01 136.086 1157.19 184.123 1157.55 188.085H1043.35Z"
        fill="currentColor"
    />
</svg>                    <span class="sr-only">Home</span>
                </a>
            </li>
        </ul>

        <div class="absolute top-0 flex items-center p-2 cursor-pointer right-9 lg:right-auto lg:top-auto lg:relative lg:col-span-6 lg:w-full lg:hover:bg-sand-light-4 lg:dark:hover:bg-sand-dark-4 rounded-xs lg:dark:bg-sand-dark-5 lg:bg-sand-light-3 text-sand-light-9-alpha-45 dark:text-sand-dark-11">
            <svg class="w-6 h-6 lg:w-5 lg:h-5 lg:mr-2 shrink-0"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g>
        <path
            d="M15.8333 15.8333L13.0523 13.0524M13.0523 13.0524C13.9943 12.1104 14.5769 10.8092 14.5769 9.3718C14.5769 6.49708 12.2465 4.16667 9.37176 4.16667C6.49704 4.16667 4.16663 6.49708 4.16663 9.3718C4.16663 12.2465 6.49704 14.5769 9.37176 14.5769C10.8091 14.5769 12.1104 13.9943 13.0523 13.0524Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </g>
</svg>            <div class="grow">
                <div id="docsearch" class="absolute inset-0 lg:*:px-9 lg:*:py-1.5 *:absolute *:inset-0 text-base bg-transparent text-sand-light-9-alpha-45/70 dark:text-sand-dark-10"></div>
            </div>
            <span class="ml-2 hidden lg:block mr-1.5 text-sm font-medium shrink-0 text-sand-light-9 dark:text-sand-dark-10">⌘K</span>
        </div>

        <div class="flex items-center justify-end col-span-9 gap-4 lg:col-span-3 dark:text-sand-dark-12">
            <select
    x-data
    aria-label="Laravel version"
    @change="window.location = $event.target.value"
    class="hidden text-sm py-1.5 px-3 bg-sand-light-1 dark:bg-sand-dark-1 border-0 whitespace-nowrap lg:block"
>
            <option
                        value="https://laravel.com/docs/master">
                Version Master
        </option>
            <option
                        value="https://laravel.com/docs/12.x">
                Version 12.x
        </option>
            <option
                        value="https://laravel.com/docs/11.x">
                Version 11.x
        </option>
            <option
            selected            value="https://laravel.com/docs/10.x">
                Version 10.x
        </option>
            <option
                        value="https://laravel.com/docs/9.x">
                Version 9.x
        </option>
            <option
                        value="https://laravel.com/docs/8.x">
                Version 8.x
        </option>
            <option
                        value="https://laravel.com/docs/7.x">
                Version 7.x
        </option>
            <option
                        value="https://laravel.com/docs/6.x">
                Version 6.x
        </option>
            <option
                        value="https://laravel.com/docs/5.8">
                Version 5.8
        </option>
            <option
                        value="https://laravel.com/docs/5.7">
                Version 5.7
        </option>
            <option
                        value="https://laravel.com/docs/5.6">
                Version 5.6
        </option>
            <option
                        value="https://laravel.com/docs/5.5">
                Version 5.5
        </option>
            <option
                        value="https://laravel.com/docs/5.4">
                Version 5.4
        </option>
            <option
                        value="https://laravel.com/docs/5.3">
                Version 5.3
        </option>
            <option
                        value="https://laravel.com/docs/5.2">
                Version 5.2
        </option>
            <option
                        value="https://laravel.com/docs/5.1">
                Version 5.1
        </option>
            <option
                        value="https://laravel.com/docs/5.0">
                Version 5.0
        </option>
            <option
                        value="https://laravel.com/docs/4.2">
                Version 4.2
        </option>
    </select>

            <select
    x-data
    aria-label="Laravel version"
    @change="window.location = $event.target.value"
    class="text-sm py-1.5 px-3 bg-sand-light-1 dark:bg-sand-dark-1 border-0 whitespace-nowrap lg:hidden"
>
            <option
                        value="https://laravel.com/docs/master">
                vMaster
        </option>
            <option
                        value="https://laravel.com/docs/12.x">
                v12.x
        </option>
            <option
                        value="https://laravel.com/docs/11.x">
                v11.x
        </option>
            <option
            selected            value="https://laravel.com/docs/10.x">
                v10.x
        </option>
            <option
                        value="https://laravel.com/docs/9.x">
                v9.x
        </option>
            <option
                        value="https://laravel.com/docs/8.x">
                v8.x
        </option>
            <option
                        value="https://laravel.com/docs/7.x">
                v7.x
        </option>
            <option
                        value="https://laravel.com/docs/6.x">
                v6.x
        </option>
            <option
                        value="https://laravel.com/docs/5.8">
                v5.8
        </option>
            <option
                        value="https://laravel.com/docs/5.7">
                v5.7
        </option>
            <option
                        value="https://laravel.com/docs/5.6">
                v5.6
        </option>
            <option
                        value="https://laravel.com/docs/5.5">
                v5.5
        </option>
            <option
                        value="https://laravel.com/docs/5.4">
                v5.4
        </option>
            <option
                        value="https://laravel.com/docs/5.3">
                v5.3
        </option>
            <option
                        value="https://laravel.com/docs/5.2">
                v5.2
        </option>
            <option
                        value="https://laravel.com/docs/5.1">
                v5.1
        </option>
            <option
                        value="https://laravel.com/docs/5.0">
                v5.0
        </option>
            <option
                        value="https://laravel.com/docs/4.2">
                v4.2
        </option>
    </select>

            <div class="hidden lg:block">
                <div class="flex items-center size-8 group" x-data="themeSwitcher" x-on:switch-theme.window="saveAndUpdate($event.detail)">
    <button id="header__sun" @click="toSystemMode" title="Switch to system theme" class="size-8 cursor-default flex items-center justify-center text-sand-light-12 group-hover:text-sand-light-10 dark:text-sand-dark-12 dark:group-hover:text-sand-dark-10 transition duration-100 focus:outline-none focus:shadow-outline">
        <svg class="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 3.29071V1.76746M5.8418 18.1585L4.7647 19.2356M12.0002 22.2326V20.7093M19.2357 4.76456L18.1586 5.84166M20.7095 12H22.2327M18.1586 18.1584L19.2357 19.2355M1.76758 12H3.29083M4.76462 4.7645L5.84173 5.8416M15.7123 8.2877C17.7626 10.338 17.7626 13.6621 15.7123 15.7123C13.6621 17.7626 10.338 17.7626 8.2877 15.7123C6.23745 13.6621 6.23745 10.338 8.2877 8.2877C10.338 6.23745 13.6621 6.23745 15.7123 8.2877Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg>    </button>
    <button id="header__moon" @click="toLightMode" title="Switch to light mode" class="size-8 cursor-default flex items-center justify-center text-sand-light-12 group-hover:text-sand-light-10 dark:text-sand-dark-12 dark:group-hover:text-sand-dark-10 transition duration-100 focus:outline-none focus:shadow-outline">
        <svg class="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2496 14.1987C19.5326 14.3951 18.7782 14.5 18 14.5C13.3056 14.5 9.5 10.6944 9.5 5.99999C9.5 5.22185 9.60487 4.4674 9.80124 3.75043C6.15452 4.72095 3.46777 8.04578 3.46777 11.9981C3.46777 16.7114 7.28864 20.5323 12.0019 20.5323C15.9543 20.5323 19.2791 17.8455 20.2496 14.1987ZM20.5196 12.5328C19.7378 12.8346 18.8882 13 18 13C14.134 13 11 9.86598 11 5.99999C11 5.11181 11.1654 4.26226 11.4671 3.48047C11.6142 3.09951 11.7935 2.73464 12.0019 2.38923C12.0888 2.24526 12.1807 2.10466 12.2774 1.9677C12.1858 1.96523 12.094 1.96399 12.0019 1.96399C11.4758 1.96399 10.9592 2.00448 10.455 2.0825C5.64774 2.8264 1.96777 6.98251 1.96777 11.9981C1.96777 17.5398 6.46021 22.0323 12.0019 22.0323C17.0176 22.0323 21.1737 18.3523 21.9176 13.545C21.9956 13.0408 22.0361 12.5242 22.0361 11.9981C22.0361 11.906 22.0348 11.8141 22.0323 11.7226C21.8953 11.8193 21.7547 11.9112 21.6107 11.9981C21.2653 12.2065 20.9005 12.3858 20.5196 12.5328Z" fill="currentColor"/>
<path d="M16.3333 5.33333L17.5 3L18.6667 5.33333L21 6.5L18.6667 7.66667L17.5 10L16.3333 7.66667L14 6.5L16.3333 5.33333Z" fill="currentColor"/>
</svg>    </button>
    <button id="header__indeterminate" @click="toDarkMode" title="Switch to dark mode" class="size-8 cursor-default flex items-center justify-center text-sand-light-12 group-hover:text-sand-light-10 dark:text-sand-dark-12 dark:group-hover:text-sand-dark-10 transition duration-100 focus:outline-none focus:shadow-outline">
        <svg class="size-6 dark:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5V3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
</svg>        <svg class="size-6 hidden dark:block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5V3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
</svg>    </button>
</div>
            </div>

            <button popovertarget="docs-nav-mobile" class="cursor-pointer ml-13 lg:hidden">
                <svg class="w-6 h-6 text-sand-light-9 hamburger-menu"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M2.75 7.25H21.25M2.75 16.75H21.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="square"
    />
</svg>                <svg class="w-6 h-6 text-sand-light-9 close-menu"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="square"
    />
</svg>            </button>
        </div>
</div>
</nav>

<div popover id="docs-nav-mobile" class="fixed w-full bg-transparent main-nav-popover top-(--popover-top-offset)">
    <div class="px-5 py-8 h-[calc(100dvh-5.5rem)] relative overflow-auto border-b docs_sidebar bg-sand-light-1 dark:bg-sand-dark-1">
        <div class="absolute top-5 right-8">
            <div class="flex items-center size-8 group" x-data="themeSwitcher" x-on:switch-theme.window="saveAndUpdate($event.detail)">
    <button id="header__sun" @click="toSystemMode" title="Switch to system theme" class="size-8 cursor-default flex items-center justify-center text-sand-light-12 group-hover:text-sand-light-10 dark:text-sand-dark-12 dark:group-hover:text-sand-dark-10 transition duration-100 focus:outline-none focus:shadow-outline">
        <svg class="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 3.29071V1.76746M5.8418 18.1585L4.7647 19.2356M12.0002 22.2326V20.7093M19.2357 4.76456L18.1586 5.84166M20.7095 12H22.2327M18.1586 18.1584L19.2357 19.2355M1.76758 12H3.29083M4.76462 4.7645L5.84173 5.8416M15.7123 8.2877C17.7626 10.338 17.7626 13.6621 15.7123 15.7123C13.6621 17.7626 10.338 17.7626 8.2877 15.7123C6.23745 13.6621 6.23745 10.338 8.2877 8.2877C10.338 6.23745 13.6621 6.23745 15.7123 8.2877Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg>    </button>
    <button id="header__moon" @click="toLightMode" title="Switch to light mode" class="size-8 cursor-default flex items-center justify-center text-sand-light-12 group-hover:text-sand-light-10 dark:text-sand-dark-12 dark:group-hover:text-sand-dark-10 transition duration-100 focus:outline-none focus:shadow-outline">
        <svg class="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2496 14.1987C19.5326 14.3951 18.7782 14.5 18 14.5C13.3056 14.5 9.5 10.6944 9.5 5.99999C9.5 5.22185 9.60487 4.4674 9.80124 3.75043C6.15452 4.72095 3.46777 8.04578 3.46777 11.9981C3.46777 16.7114 7.28864 20.5323 12.0019 20.5323C15.9543 20.5323 19.2791 17.8455 20.2496 14.1987ZM20.5196 12.5328C19.7378 12.8346 18.8882 13 18 13C14.134 13 11 9.86598 11 5.99999C11 5.11181 11.1654 4.26226 11.4671 3.48047C11.6142 3.09951 11.7935 2.73464 12.0019 2.38923C12.0888 2.24526 12.1807 2.10466 12.2774 1.9677C12.1858 1.96523 12.094 1.96399 12.0019 1.96399C11.4758 1.96399 10.9592 2.00448 10.455 2.0825C5.64774 2.8264 1.96777 6.98251 1.96777 11.9981C1.96777 17.5398 6.46021 22.0323 12.0019 22.0323C17.0176 22.0323 21.1737 18.3523 21.9176 13.545C21.9956 13.0408 22.0361 12.5242 22.0361 11.9981C22.0361 11.906 22.0348 11.8141 22.0323 11.7226C21.8953 11.8193 21.7547 11.9112 21.6107 11.9981C21.2653 12.2065 20.9005 12.3858 20.5196 12.5328Z" fill="currentColor"/>
<path d="M16.3333 5.33333L17.5 3L18.6667 5.33333L21 6.5L18.6667 7.66667L17.5 10L16.3333 7.66667L14 6.5L16.3333 5.33333Z" fill="currentColor"/>
</svg>    </button>
    <button id="header__indeterminate" @click="toDarkMode" title="Switch to dark mode" class="size-8 cursor-default flex items-center justify-center text-sand-light-12 group-hover:text-sand-light-10 dark:text-sand-dark-12 dark:group-hover:text-sand-dark-10 transition duration-100 focus:outline-none focus:shadow-outline">
        <svg class="size-6 dark:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5V3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
</svg>        <svg class="size-6 hidden dark:block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5V3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
</svg>    </button>
</div>
        </div>

        <ul>
<li>
<h2>Prologue</h2>
<ul>
<li><a href="/docs/10.x/releases">Release Notes</a></li>
<li><a href="/docs/10.x/upgrade">Upgrade Guide</a></li>
<li><a href="/docs/10.x/contributions">Contribution Guide</a></li>
</ul>
</li>
<li class="sub--on">
<h2>Getting Started</h2>
<ul>
<li class="active"><a href="/docs/10.x/installation">Installation</a></li>
<li><a href="/docs/10.x/configuration">Configuration</a></li>
<li><a href="/docs/10.x/structure">Directory Structure</a></li>
<li><a href="/docs/10.x/frontend">Frontend</a></li>
<li><a href="/docs/10.x/starter-kits">Starter Kits</a></li>
<li><a href="/docs/10.x/deployment">Deployment</a></li>
</ul>
</li>
<li>
<h2>Architecture Concepts</h2>
<ul>
<li><a href="/docs/10.x/lifecycle">Request Lifecycle</a></li>
<li><a href="/docs/10.x/container">Service Container</a></li>
<li><a href="/docs/10.x/providers">Service Providers</a></li>
<li><a href="/docs/10.x/facades">Facades</a></li>
</ul>
</li>
<li>
<h2>The Basics</h2>
<ul>
<li><a href="/docs/10.x/routing">Routing</a></li>
<li><a href="/docs/10.x/middleware">Middleware</a></li>
<li><a href="/docs/10.x/csrf">CSRF Protection</a></li>
<li><a href="/docs/10.x/controllers">Controllers</a></li>
<li><a href="/docs/10.x/requests">Requests</a></li>
<li><a href="/docs/10.x/responses">Responses</a></li>
<li><a href="/docs/10.x/views">Views</a></li>
<li><a href="/docs/10.x/blade">Blade Templates</a></li>
<li><a href="/docs/10.x/vite">Asset Bundling</a></li>
<li><a href="/docs/10.x/urls">URL Generation</a></li>
<li><a href="/docs/10.x/session">Session</a></li>
<li><a href="/docs/10.x/validation">Validation</a></li>
<li><a href="/docs/10.x/errors">Error Handling</a></li>
<li><a href="/docs/10.x/logging">Logging</a></li>
</ul>
</li>
<li>
<h2>Digging Deeper</h2>
<ul>
<li><a href="/docs/10.x/artisan">Artisan Console</a></li>
<li><a href="/docs/10.x/broadcasting">Broadcasting</a></li>
<li><a href="/docs/10.x/cache">Cache</a></li>
<li><a href="/docs/10.x/collections">Collections</a></li>
<li><a href="/docs/10.x/contracts">Contracts</a></li>
<li><a href="/docs/10.x/events">Events</a></li>
<li><a href="/docs/10.x/filesystem">File Storage</a></li>
<li><a href="/docs/10.x/helpers">Helpers</a></li>
<li><a href="/docs/10.x/http-client">HTTP Client</a></li>
<li><a href="/docs/10.x/localization">Localization</a></li>
<li><a href="/docs/10.x/mail">Mail</a></li>
<li><a href="/docs/10.x/notifications">Notifications</a></li>
<li><a href="/docs/10.x/packages">Package Development</a></li>
<li><a href="/docs/10.x/processes">Processes</a></li>
<li><a href="/docs/10.x/queues">Queues</a></li>
<li><a href="/docs/10.x/rate-limiting">Rate Limiting</a></li>
<li><a href="/docs/10.x/strings">Strings</a></li>
<li><a href="/docs/10.x/scheduling">Task Scheduling</a></li>
</ul>
</li>
<li>
<h2>Security</h2>
<ul>
<li><a href="/docs/10.x/authentication">Authentication</a></li>
<li><a href="/docs/10.x/authorization">Authorization</a></li>
<li><a href="/docs/10.x/verification">Email Verification</a></li>
<li><a href="/docs/10.x/encryption">Encryption</a></li>
<li><a href="/docs/10.x/hashing">Hashing</a></li>
<li><a href="/docs/10.x/passwords">Password Reset</a></li>
</ul>
</li>
<li>
<h2>Database</h2>
<ul>
<li><a href="/docs/10.x/database">Getting Started</a></li>
<li><a href="/docs/10.x/queries">Query Builder</a></li>
<li><a href="/docs/10.x/pagination">Pagination</a></li>
<li><a href="/docs/10.x/migrations">Migrations</a></li>
<li><a href="/docs/10.x/seeding">Seeding</a></li>
<li><a href="/docs/10.x/redis">Redis</a></li>
</ul>
</li>
<li>
<h2>Eloquent ORM</h2>
<ul>
<li><a href="/docs/10.x/eloquent">Getting Started</a></li>
<li><a href="/docs/10.x/eloquent-relationships">Relationships</a></li>
<li><a href="/docs/10.x/eloquent-collections">Collections</a></li>
<li><a href="/docs/10.x/eloquent-mutators">Mutators / Casts</a></li>
<li><a href="/docs/10.x/eloquent-resources">API Resources</a></li>
<li><a href="/docs/10.x/eloquent-serialization">Serialization</a></li>
<li><a href="/docs/10.x/eloquent-factories">Factories</a></li>
</ul>
</li>
<li>
<h2>Testing</h2>
<ul>
<li><a href="/docs/10.x/testing">Getting Started</a></li>
<li><a href="/docs/10.x/http-tests">HTTP Tests</a></li>
<li><a href="/docs/10.x/console-tests">Console Tests</a></li>
<li><a href="/docs/10.x/dusk">Browser Tests</a></li>
<li><a href="/docs/10.x/database-testing">Database</a></li>
<li><a href="/docs/10.x/mocking">Mocking</a></li>
</ul>
</li>
<li>
<h2>Packages</h2>
<ul>
<li><a href="/docs/10.x/starter-kits#laravel-breeze">Breeze</a></li>
<li><a href="/docs/10.x/billing">Cashier (Stripe)</a></li>
<li><a href="/docs/10.x/cashier-paddle">Cashier (Paddle)</a></li>
<li><a href="/docs/10.x/dusk">Dusk</a></li>
<li><a href="/docs/10.x/envoy">Envoy</a></li>
<li><a href="/docs/10.x/fortify">Fortify</a></li>
<li><a href="/docs/10.x/folio">Folio</a></li>
<li><a href="/docs/10.x/homestead">Homestead</a></li>
<li><a href="/docs/10.x/horizon">Horizon</a></li>
<li><a href="https://jetstream.laravel.com">Jetstream</a></li>
<li><a href="/docs/10.x/mix">Mix</a></li>
<li><a href="/docs/10.x/octane">Octane</a></li>
<li><a href="/docs/10.x/passport">Passport</a></li>
<li><a href="/docs/10.x/pennant">Pennant</a></li>
<li><a href="/docs/10.x/pint">Pint</a></li>
<li><a href="/docs/10.x/precognition">Precognition</a></li>
<li><a href="/docs/10.x/prompts">Prompts</a></li>
<li><a href="/docs/10.x/pulse">Pulse</a></li>
<li><a href="/docs/10.x/reverb">Reverb</a></li>
<li><a href="/docs/10.x/sail">Sail</a></li>
<li><a href="/docs/10.x/sanctum">Sanctum</a></li>
<li><a href="/docs/10.x/scout">Scout</a></li>
<li><a href="/docs/10.x/socialite">Socialite</a></li>
<li><a href="/docs/10.x/telescope">Telescope</a></li>
<li><a href="/docs/10.x/valet">Valet</a></li>
</ul>
</li>
<li><a href="https://api.laravel.com/docs/10.x">API Documentation</a></li>
</ul>

    </div>
</div>

                <div class="px-4 xl:px-16">
        <a
    id="skip-to-content-link"
    href="#main-content"
    class="absolute bg-gray-100 px-4 py-2 top-3 left-3 text-gray-700 shadow-xl"
>
    Skip to content
</a>

        <div class="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-x-10 px-6 mt-10 lg:px-0" id="docsScreen">
    <aside class="relative col-span-3 lg:pb-6">
                <div class="sticky bottom-0 left-0 z-20 hidden top-22 lg:block">
                    <div class="relative flex flex-col flex-1 max-h-screen pl-16 -ml-16 overflow-auto sticky-side-nav">
                        <nav id="indexed-nav" class="hidden lg:block">
                            <div class="docs_sidebar">
                                <ul>
<li>
<h2>Prologue</h2>
<ul>
<li><a href="/docs/10.x/releases">Release Notes</a></li>
<li><a href="/docs/10.x/upgrade">Upgrade Guide</a></li>
<li><a href="/docs/10.x/contributions">Contribution Guide</a></li>
</ul>
</li>
<li class="sub--on">
<h2>Getting Started</h2>
<ul>
<li class="active"><a href="/docs/10.x/installation">Installation</a></li>
<li><a href="/docs/10.x/configuration">Configuration</a></li>
<li><a href="/docs/10.x/structure">Directory Structure</a></li>
<li><a href="/docs/10.x/frontend">Frontend</a></li>
<li><a href="/docs/10.x/starter-kits">Starter Kits</a></li>
<li><a href="/docs/10.x/deployment">Deployment</a></li>
</ul>
</li>
<li>
<h2>Architecture Concepts</h2>
<ul>
<li><a href="/docs/10.x/lifecycle">Request Lifecycle</a></li>
<li><a href="/docs/10.x/container">Service Container</a></li>
<li><a href="/docs/10.x/providers">Service Providers</a></li>
<li><a href="/docs/10.x/facades">Facades</a></li>
</ul>
</li>
<li>
<h2>The Basics</h2>
<ul>
<li><a href="/docs/10.x/routing">Routing</a></li>
<li><a href="/docs/10.x/middleware">Middleware</a></li>
<li><a href="/docs/10.x/csrf">CSRF Protection</a></li>
<li><a href="/docs/10.x/controllers">Controllers</a></li>
<li><a href="/docs/10.x/requests">Requests</a></li>
<li><a href="/docs/10.x/responses">Responses</a></li>
<li><a href="/docs/10.x/views">Views</a></li>
<li><a href="/docs/10.x/blade">Blade Templates</a></li>
<li><a href="/docs/10.x/vite">Asset Bundling</a></li>
<li><a href="/docs/10.x/urls">URL Generation</a></li>
<li><a href="/docs/10.x/session">Session</a></li>
<li><a href="/docs/10.x/validation">Validation</a></li>
<li><a href="/docs/10.x/errors">Error Handling</a></li>
<li><a href="/docs/10.x/logging">Logging</a></li>
</ul>
</li>
<li>
<h2>Digging Deeper</h2>
<ul>
<li><a href="/docs/10.x/artisan">Artisan Console</a></li>
<li><a href="/docs/10.x/broadcasting">Broadcasting</a></li>
<li><a href="/docs/10.x/cache">Cache</a></li>
<li><a href="/docs/10.x/collections">Collections</a></li>
<li><a href="/docs/10.x/contracts">Contracts</a></li>
<li><a href="/docs/10.x/events">Events</a></li>
<li><a href="/docs/10.x/filesystem">File Storage</a></li>
<li><a href="/docs/10.x/helpers">Helpers</a></li>
<li><a href="/docs/10.x/http-client">HTTP Client</a></li>
<li><a href="/docs/10.x/localization">Localization</a></li>
<li><a href="/docs/10.x/mail">Mail</a></li>
<li><a href="/docs/10.x/notifications">Notifications</a></li>
<li><a href="/docs/10.x/packages">Package Development</a></li>
<li><a href="/docs/10.x/processes">Processes</a></li>
<li><a href="/docs/10.x/queues">Queues</a></li>
<li><a href="/docs/10.x/rate-limiting">Rate Limiting</a></li>
<li><a href="/docs/10.x/strings">Strings</a></li>
<li><a href="/docs/10.x/scheduling">Task Scheduling</a></li>
</ul>
</li>
<li>
<h2>Security</h2>
<ul>
<li><a href="/docs/10.x/authentication">Authentication</a></li>
<li><a href="/docs/10.x/authorization">Authorization</a></li>
<li><a href="/docs/10.x/verification">Email Verification</a></li>
<li><a href="/docs/10.x/encryption">Encryption</a></li>
<li><a href="/docs/10.x/hashing">Hashing</a></li>
<li><a href="/docs/10.x/passwords">Password Reset</a></li>
</ul>
</li>
<li>
<h2>Database</h2>
<ul>
<li><a href="/docs/10.x/database">Getting Started</a></li>
<li><a href="/docs/10.x/queries">Query Builder</a></li>
<li><a href="/docs/10.x/pagination">Pagination</a></li>
<li><a href="/docs/10.x/migrations">Migrations</a></li>
<li><a href="/docs/10.x/seeding">Seeding</a></li>
<li><a href="/docs/10.x/redis">Redis</a></li>
</ul>
</li>
<li>
<h2>Eloquent ORM</h2>
<ul>
<li><a href="/docs/10.x/eloquent">Getting Started</a></li>
<li><a href="/docs/10.x/eloquent-relationships">Relationships</a></li>
<li><a href="/docs/10.x/eloquent-collections">Collections</a></li>
<li><a href="/docs/10.x/eloquent-mutators">Mutators / Casts</a></li>
<li><a href="/docs/10.x/eloquent-resources">API Resources</a></li>
<li><a href="/docs/10.x/eloquent-serialization">Serialization</a></li>
<li><a href="/docs/10.x/eloquent-factories">Factories</a></li>
</ul>
</li>
<li>
<h2>Testing</h2>
<ul>
<li><a href="/docs/10.x/testing">Getting Started</a></li>
<li><a href="/docs/10.x/http-tests">HTTP Tests</a></li>
<li><a href="/docs/10.x/console-tests">Console Tests</a></li>
<li><a href="/docs/10.x/dusk">Browser Tests</a></li>
<li><a href="/docs/10.x/database-testing">Database</a></li>
<li><a href="/docs/10.x/mocking">Mocking</a></li>
</ul>
</li>
<li>
<h2>Packages</h2>
<ul>
<li><a href="/docs/10.x/starter-kits#laravel-breeze">Breeze</a></li>
<li><a href="/docs/10.x/billing">Cashier (Stripe)</a></li>
<li><a href="/docs/10.x/cashier-paddle">Cashier (Paddle)</a></li>
<li><a href="/docs/10.x/dusk">Dusk</a></li>
<li><a href="/docs/10.x/envoy">Envoy</a></li>
<li><a href="/docs/10.x/fortify">Fortify</a></li>
<li><a href="/docs/10.x/folio">Folio</a></li>
<li><a href="/docs/10.x/homestead">Homestead</a></li>
<li><a href="/docs/10.x/horizon">Horizon</a></li>
<li><a href="https://jetstream.laravel.com">Jetstream</a></li>
<li><a href="/docs/10.x/mix">Mix</a></li>
<li><a href="/docs/10.x/octane">Octane</a></li>
<li><a href="/docs/10.x/passport">Passport</a></li>
<li><a href="/docs/10.x/pennant">Pennant</a></li>
<li><a href="/docs/10.x/pint">Pint</a></li>
<li><a href="/docs/10.x/precognition">Precognition</a></li>
<li><a href="/docs/10.x/prompts">Prompts</a></li>
<li><a href="/docs/10.x/pulse">Pulse</a></li>
<li><a href="/docs/10.x/reverb">Reverb</a></li>
<li><a href="/docs/10.x/sail">Sail</a></li>
<li><a href="/docs/10.x/sanctum">Sanctum</a></li>
<li><a href="/docs/10.x/scout">Scout</a></li>
<li><a href="/docs/10.x/socialite">Socialite</a></li>
<li><a href="/docs/10.x/telescope">Telescope</a></li>
<li><a href="/docs/10.x/valet">Valet</a></li>
</ul>
</li>
<li><a href="https://api.laravel.com/docs/10.x">API Documentation</a></li>
</ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </aside>

            <section class="col-span-12 lg:col-span-9 xl:col-span-6">
                <div>
                    <section>
                        <section class="docs_main max-w-prose">
                                                            <blockquote>
                                    <div class="callout">
                                        <div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
                                            <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#F53003]">
                                                <svg width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 17V16.99M1 1V13" stroke="#FDFDFC" stroke-width="2" stroke-linecap="square"/>
</svg>

                                            </div>

                                            <p>
                                                <strong>WARNING</strong> You're browsing the documentation for an old version of Laravel.
                                                Consider upgrading your project to <a href="https://laravel.com/docs/12.x">Laravel 12.x</a>.
                                            </p>
                                        </div>
                                    </div>
                                </blockquote>
                            
                            
                            <div id="main-content">
    <h1>Installation</h1>
<ul>
<li><a href="#meet-laravel">Meet Laravel</a>
<ul>
<li><a href="#why-laravel">Why Laravel?</a></li>
</ul>
</li>
<li><a href="#creating-a-laravel-project">Creating a Laravel Project</a></li>
<li><a href="#initial-configuration">Initial Configuration</a>
<ul>
<li><a href="#environment-based-configuration">Environment Based Configuration</a></li>
<li><a href="#databases-and-migrations">Databases and Migrations</a></li>
<li><a href="#directory-configuration">Directory Configuration</a></li>
</ul>
</li>
<li><a href="#docker-installation-using-sail">Docker Installation Using Sail</a>
<ul>
<li><a href="#sail-on-macos">Sail on macOS</a></li>
<li><a href="#sail-on-windows">Sail on Windows</a></li>
<li><a href="#sail-on-linux">Sail on Linux</a></li>
<li><a href="#choosing-your-sail-services">Choosing Your Sail Services</a></li>
</ul>
</li>
<li><a href="#ide-support">IDE Support</a></li>
<li><a href="#next-steps">Next Steps</a>
<ul>
<li><a href="#laravel-the-fullstack-framework">Laravel the Full Stack Framework</a></li>
<li><a href="#laravel-the-api-backend">Laravel the API Backend</a></li>
</ul>
</li>
</ul>
<h2 id="meet-laravel"><a href="#meet-laravel">Meet Laravel</a></h2>
<p>Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details.</p>
<p>Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and integration testing, and more.</p>
<p>Whether you are new to PHP web frameworks or have years of experience, Laravel is a framework that can grow with you. We'll help you take your first steps as a web developer or give you a boost as you take your expertise to the next level. We can't wait to see what you build.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
New to Laravel? Check out the <a href="https://bootcamp.laravel.com">Laravel Bootcamp</a> for a hands-on tour of the framework while we walk you through building your first Laravel application.</p>
</div>
<h3 id="why-laravel"><a href="#why-laravel">Why Laravel?</a></h3>
<p>There are a variety of tools and frameworks available to you when building a web application. However, we believe Laravel is the best choice for building modern, full-stack web applications.</p>
<h4>A Progressive Framework</h4>
<p>We like to call Laravel a &quot;progressive&quot; framework. By that, we mean that Laravel grows with you. If you're just taking your first steps into web development, Laravel's vast library of documentation, guides, and <a href="https://laracasts.com">video tutorials</a> will help you learn the ropes without becoming overwhelmed.</p>
<p>If you're a senior developer, Laravel gives you robust tools for <a href="/docs/10.x/container">dependency injection</a>, <a href="/docs/10.x/testing">unit testing</a>, <a href="/docs/10.x/queues">queues</a>, <a href="/docs/10.x/broadcasting">real-time events</a>, and more. Laravel is fine-tuned for building professional web applications and ready to handle enterprise work loads.</p>
<h4>A Scalable Framework</h4>
<p>Laravel is incredibly scalable. Thanks to the scaling-friendly nature of PHP and Laravel's built-in support for fast, distributed cache systems like Redis, horizontal scaling with Laravel is a breeze. In fact, Laravel applications have been easily scaled to handle hundreds of millions of requests per month.</p>
<p>Need extreme scaling? Platforms like <a href="https://vapor.laravel.com">Laravel Vapor</a> allow you to run your Laravel application at nearly limitless scale on AWS's latest serverless technology.</p>
<h4>A Community Framework</h4>
<p>Laravel combines the best packages in the PHP ecosystem to offer the most robust and developer friendly framework available. In addition, thousands of talented developers from around the world have <a href="https://github.com/laravel/framework">contributed to the framework</a>. Who knows, maybe you'll even become a Laravel contributor.</p>
<h2 id="creating-a-laravel-project"><a href="#creating-a-laravel-project">Creating a Laravel Project</a></h2>
<p>Before creating your first Laravel project, make sure that your local machine has PHP and <a href="https://getcomposer.org">Composer</a> installed. If you are developing on macOS, PHP and Composer can be installed in minutes via <a href="https://herd.laravel.com">Laravel Herd</a>. In addition, we recommend <a href="https://nodejs.org">installing Node and NPM</a>.</p>
<p>After you have installed PHP and Composer, you may create a new Laravel project via Composer's <code>create-project</code> command:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">composer create-project &quot;laravel/laravel:^10.0&quot; example-app</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
composer create-project &quot;laravel/laravel:^10.0&quot; example-app</div></code></pre>
</div>
<p>Or, you may create new Laravel projects by globally installing <a href="https://github.com/laravel/installer">the Laravel installer</a> via Composer:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">composer global require laravel/installer</span></div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">2</span></div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">3</span><span style="color: #BFC7D5;">laravel new example-app</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
composer global require laravel/installer

laravel new example-app</div></code></pre>
</div>
<p>Once the project has been created, start Laravel's local development server using Laravel Artisan's <code>serve</code> command:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">cd example-app</span></div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">2</span></div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">3</span><span style="color: #BFC7D5;">php artisan serve</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
cd example-app

php artisan serve</div></code></pre>
</div>
<p>Once you have started the Artisan development server, your application will be accessible in your web browser at <a href="http://localhost:8000">http://localhost:8000</a>. Next, you're ready to <a href="#next-steps">start taking your next steps into the Laravel ecosystem</a>. Of course, you may also want to <a href="#databases-and-migrations">configure a database</a>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
If you would like a head start when developing your Laravel application, consider using one of our <a href="/docs/10.x/starter-kits">starter kits</a>. Laravel's starter kits provide backend and frontend authentication scaffolding for your new Laravel application.</p>
</div>
<h2 id="initial-configuration"><a href="#initial-configuration">Initial Configuration</a></h2>
<p>All of the configuration files for the Laravel framework are stored in the <code>config</code> directory. Each option is documented, so feel free to look through the files and get familiar with the options available to you.</p>
<p>Laravel needs almost no additional configuration out of the box. You are free to get started developing! However, you may wish to review the <code>config/app.php</code> file and its documentation. It contains several options such as <code>timezone</code> and <code>locale</code> that you may wish to change according to your application.</p>
<h3 id="environment-based-configuration"><a href="#environment-based-configuration">Environment Based Configuration</a></h3>
<p>Since many of Laravel's configuration option values may vary depending on whether your application is running on your local machine or on a production web server, many important configuration values are defined using the <code>.env</code> file that exists at the root of your application.</p>
<p>Your <code>.env</code> file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
For more information about the <code>.env</code> file and environment based configuration, check out the full <a href="/docs/10.x/configuration#environment-configuration">configuration documentation</a>.</p>
</div>
<h3 id="databases-and-migrations"><a href="#databases-and-migrations">Databases and Migrations</a></h3>
<p>Now that you have created your Laravel application, you probably want to store some data in a database. By default, your application's <code>.env</code> configuration file specifies that Laravel will be interacting with a MySQL database and will access the database at <code>127.0.0.1</code>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
If you are developing on macOS and need to install MySQL, Postgres, or Redis locally, consider using <a href="https://dbngin.com/">DBngin</a>.</p>
</div>
<p>If you do not want to install MySQL or Postgres on your local machine, you can always use a <a href="https://www.sqlite.org/index.html">SQLite</a> database. SQLite is a small, fast, self-contained database engine. To get started, update your <code>.env</code> configuration file to use Laravel's <code>sqlite</code> database driver. You may remove the other database configuration options:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="ini" class='torchlight has-add-lines has-remove-lines has-diff-lines' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line line-add line-has-background' style='background-color: #99b76d23'><span style="color:#C3E88D; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #C3E88D;">DB_CONNECTION</span><span style="color: #C3E88D;">=sqlite </span></div><div class='line line-remove line-has-background' style='background-color: #ef535033'><span style="color:#f07178; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">2</span><span style="color: #f07178;">DB_CONNECTION</span><span style="color: #f07178;">=mysql </span></div><div class='line line-remove line-has-background' style='background-color: #ef535033'><span style="color:#f07178; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">3</span><span style="color: #f07178;">DB_HOST</span><span style="color: #f07178;">=127.0.0.1 </span></div><div class='line line-remove line-has-background' style='background-color: #ef535033'><span style="color:#f07178; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">4</span><span style="color: #f07178;">DB_PORT</span><span style="color: #f07178;">=3306 </span></div><div class='line line-remove line-has-background' style='background-color: #ef535033'><span style="color:#f07178; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">5</span><span style="color: #f07178;">DB_DATABASE</span><span style="color: #f07178;">=laravel </span></div><div class='line line-remove line-has-background' style='background-color: #ef535033'><span style="color:#f07178; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">6</span><span style="color: #f07178;">DB_USERNAME</span><span style="color: #f07178;">=root </span></div><div class='line line-remove line-has-background' style='background-color: #ef535033'><span style="color:#f07178; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">7</span><span style="color: #f07178;">DB_PASSWORD</span><span style="color: #f07178;">= </span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
DB_CONNECTION=sqlite
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=</div></code></pre>
</div>
<p>Once you have configured your SQLite database, you may run your application's <a href="/docs/10.x/migrations">database migrations</a>, which will create your application's database tables:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">php </span><span style="color: #BFC7D5;">artisan</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">migrate</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
php artisan migrate</div></code></pre>
</div>
<p>If an SQLite database does not exist for your application, Laravel will ask you if you would like the database to be created. Typically, the SQLite database file will be created at <code>database/database.sqlite</code>.</p>
<h3 id="directory-configuration"><a href="#directory-configuration">Directory Configuration</a></h3>
<p>Laravel should always be served out of the root of the &quot;web directory&quot; configured for your web server. You should not attempt to serve a Laravel application out of a subdirectory of the &quot;web directory&quot;. Attempting to do so could expose sensitive files present within your application.</p>
<h2 id="docker-installation-using-sail"><a href="#docker-installation-using-sail">Docker Installation Using Sail</a></h2>
<p>We want it to be as easy as possible to get started with Laravel regardless of your preferred operating system. So, there are a variety of options for developing and running a Laravel project on your local machine. While you may wish to explore these options at a later time, Laravel provides <a href="/docs/10.x/sail">Sail</a>, a built-in solution for running your Laravel project using <a href="https://www.docker.com">Docker</a>.</p>
<p>Docker is a tool for running applications and services in small, light-weight &quot;containers&quot; which do not interfere with your local machine's installed software or configuration. This means you don't have to worry about configuring or setting up complicated development tools such as web servers and databases on your local machine. To get started, you only need to install <a href="https://www.docker.com/products/docker-desktop">Docker Desktop</a>.</p>
<p>Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker configuration. Sail provides a great starting point for building a Laravel application using PHP, MySQL, and Redis without requiring prior Docker experience.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
Already a Docker expert? Don't worry! Everything about Sail can be customized using the <code>docker-compose.yml</code> file included with Laravel.</p>
</div>
<h3 id="sail-on-macos"><a href="#sail-on-macos">Sail on macOS</a></h3>
<p>If you're developing on a Mac and <a href="https://www.docker.com/products/docker-desktop">Docker Desktop</a> is already installed, you can use a simple terminal command to create a new Laravel project. For example, to create a new Laravel application in a directory named &quot;example-app&quot;, you may run the following command in your terminal:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #D9F5DD;">&quot;</span><span style="color: #C3E88D;">https://laravel.build/example-app</span><span style="color: #D9F5DD;">&quot;</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
curl -s &quot;https://laravel.build/example-app&quot; | bash</div></code></pre>
</div>
<p>Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application's directory will be created within the directory you execute the command from.</p>
<p>Sail installation may take several minutes while Sail's application containers are built on your local machine.</p>
<p>After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #89DDFF;">cd</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">example-app</span></div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">2</span>&nbsp;</div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">3</span><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">up</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
cd example-app

./vendor/bin/sail up</div></code></pre>
</div>
<p>Once the application's Docker containers have been started, you can access the application in your web browser at: <a href="http://localhost">http://localhost</a>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
To continue learning more about Laravel Sail, review its <a href="/docs/10.x/sail">complete documentation</a>.</p>
</div>
<h3 id="sail-on-windows"><a href="#sail-on-windows">Sail on Windows</a></h3>
<p>Before we create a new Laravel application on your Windows machine, make sure to install <a href="https://www.docker.com/products/docker-desktop">Docker Desktop</a>. Next, you should ensure that Windows Subsystem for Linux 2 (WSL2) is installed and enabled. WSL allows you to run Linux binary executables natively on Windows 10. Information on how to install and enable WSL2 can be found within Microsoft's <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">developer environment documentation</a>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
After installing and enabling WSL2, you should ensure that Docker Desktop is <a href="https://docs.docker.com/docker-for-windows/wsl/">configured to use the WSL2 backend</a>.</p>
</div>
<p>Next, you are ready to create your first Laravel project. Launch <a href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&amp;activetab=pivot:overviewtab">Windows Terminal</a> and begin a new terminal session for your WSL2 Linux operating system. Next, you can use a simple terminal command to create a new Laravel project. For example, to create a new Laravel application in a directory named &quot;example-app&quot;, you may run the following command in your terminal:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">https://laravel.build/example-app</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
curl -s https://laravel.build/example-app | bash</div></code></pre>
</div>
<p>Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application's directory will be created within the directory you execute the command from.</p>
<p>Sail installation may take several minutes while Sail's application containers are built on your local machine.</p>
<p>After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #89DDFF;">cd</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">example-app</span></div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">2</span>&nbsp;</div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">3</span><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">up</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
cd example-app

./vendor/bin/sail up</div></code></pre>
</div>
<p>Once the application's Docker containers have been started, you can access the application in your web browser at: <a href="http://localhost">http://localhost</a>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
To continue learning more about Laravel Sail, review its <a href="/docs/10.x/sail">complete documentation</a>.</p>
</div>
<h4>Developing Within WSL2</h4>
<p>Of course, you will need to be able to modify the Laravel application files that were created within your WSL2 installation. To accomplish this, we recommend using Microsoft's <a href="https://code.visualstudio.com">Visual Studio Code</a> editor and their first-party extension for <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack">Remote Development</a>.</p>
<p>Once these tools are installed, you may open any Laravel project by executing the <code>code .</code> command from your application's root directory using Windows Terminal.</p>
<h3 id="sail-on-linux"><a href="#sail-on-linux">Sail on Linux</a></h3>
<p>If you're developing on Linux and <a href="https://docs.docker.com/compose/install/">Docker Compose</a> is already installed, you can use a simple terminal command to create a new Laravel project.</p>
<p>First, if you are using Docker Desktop for Linux, you should execute the following command. If you are not using Docker Desktop for Linux, you may skip this step:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">docker </span><span style="color: #BFC7D5;">context</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">use</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">default</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
docker context use default</div></code></pre>
</div>
<p>Then, to create a new Laravel application in a directory named &quot;example-app&quot;, you may run the following command in your terminal:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">https://laravel.build/example-app</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
curl -s https://laravel.build/example-app | bash</div></code></pre>
</div>
<p>Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application's directory will be created within the directory you execute the command from.</p>
<p>Sail installation may take several minutes while Sail's application containers are built on your local machine.</p>
<p>After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #89DDFF;">cd</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">example-app</span></div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">2</span>&nbsp;</div><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">3</span><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">up</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
cd example-app

./vendor/bin/sail up</div></code></pre>
</div>
<p>Once the application's Docker containers have been started, you can access the application in your web browser at: <a href="http://localhost">http://localhost</a>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
To continue learning more about Laravel Sail, review its <a href="/docs/10.x/sail">complete documentation</a>.</p>
</div>
<h3 id="choosing-your-sail-services"><a href="#choosing-your-sail-services">Choosing Your Sail Services</a></h3>
<p>When creating a new Laravel application via Sail, you may use the <code>with</code> query string variable to choose which services should be configured in your new application's <code>docker-compose.yml</code> file. Available services include <code>mysql</code>, <code>pgsql</code>, <code>mariadb</code>, <code>redis</code>, <code>memcached</code>, <code>meilisearch</code>, <code>typesense</code>, <code>minio</code>, <code>selenium</code>, and <code>mailpit</code>:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #D9F5DD;">&quot;</span><span style="color: #C3E88D;">https://laravel.build/example-app?with=mysql,redis</span><span style="color: #D9F5DD;">&quot;</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
curl -s &quot;https://laravel.build/example-app?with=mysql,redis&quot; | bash</div></code></pre>
</div>
<p>If you do not specify which services you would like configured, a default stack of <code>mysql</code>, <code>redis</code>, <code>meilisearch</code>, <code>mailpit</code>, and <code>selenium</code> will be configured.</p>
<p>You may instruct Sail to install a default <a href="/docs/10.x/sail#using-devcontainers">Devcontainer</a> by adding the <code>devcontainer</code> parameter to the URL:</p>
<div class="code-container">
<pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color:#4c5374; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">1</span><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #D9F5DD;">&quot;</span><span style="color: #C3E88D;">https://laravel.build/example-app?with=mysql,redis&amp;devcontainer</span><span style="color: #D9F5DD;">&quot;</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div><div aria-hidden='true' hidden tabindex='-1' style='display: none;' class='torchlight-copy-target'>
curl -s &quot;https://laravel.build/example-app?with=mysql,redis&amp;devcontainer&quot; | bash</div></code></pre>
</div>
<h2 id="ide-support"><a href="#ide-support">IDE Support</a></h2>
<p>You are free to use any code editor you wish when developing Laravel applications; however, <a href="https://www.jetbrains.com/phpstorm/laravel/">PhpStorm</a> offers extensive support for Laravel and its ecosystem, including <a href="https://www.jetbrains.com/help/phpstorm/using-laravel-pint.html">Laravel Pint</a>.</p>
<p>In addition, the community maintained <a href="https://laravel-idea.com/">Laravel Idea</a> PhpStorm plugin offers a variety of helpful IDE augmentations, including code generation, Eloquent syntax completion, validation rule completion, and more.</p>
<h2 id="next-steps"><a href="#next-steps">Next Steps</a></h2>
<p>Now that you have created your Laravel project, you may be wondering what to learn next. First, we strongly recommend becoming familiar with how Laravel works by reading the following documentation:</p>
<div class="content-list" markdown="1">
<ul>
<li><a href="/docs/10.x/lifecycle">Request Lifecycle</a></li>
<li><a href="/docs/10.x/configuration">Configuration</a></li>
<li><a href="/docs/10.x/structure">Directory Structure</a></li>
<li><a href="/docs/10.x/frontend">Frontend</a></li>
<li><a href="/docs/10.x/container">Service Container</a></li>
<li><a href="/docs/10.x/facades">Facades</a></li>
</ul>
</div>
<p>How you want to use Laravel will also dictate the next steps on your journey. There are a variety of ways to use Laravel, and we'll explore two primary use cases for the framework below.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
New to Laravel? Check out the <a href="https://bootcamp.laravel.com">Laravel Bootcamp</a> for a hands-on tour of the framework while we walk you through building your first Laravel application.</p>
</div>
<h3 id="laravel-the-fullstack-framework"><a href="#laravel-the-fullstack-framework">Laravel the Full Stack Framework</a></h3>
<p>Laravel may serve as a full stack framework. By &quot;full stack&quot; framework we mean that you are going to use Laravel to route requests to your application and render your frontend via <a href="/docs/10.x/blade">Blade templates</a> or a single-page application hybrid technology like <a href="https://inertiajs.com">Inertia</a>. This is the most common way to use the Laravel framework, and, in our opinion, the most productive way to use Laravel.</p>
<p>If this is how you plan to use Laravel, you may want to check out our documentation on <a href="/docs/10.x/frontend">frontend development</a>, <a href="/docs/10.x/routing">routing</a>, <a href="/docs/10.x/views">views</a>, or the <a href="/docs/10.x/eloquent">Eloquent ORM</a>. In addition, you might be interested in learning about community packages like <a href="https://livewire.laravel.com">Livewire</a> and <a href="https://inertiajs.com">Inertia</a>. These packages allow you to use Laravel as a full-stack framework while enjoying many of the UI benefits provided by single-page JavaScript applications.</p>
<p>If you are using Laravel as a full stack framework, we also strongly encourage you to learn how to compile your application's CSS and JavaScript using <a href="/docs/10.x/vite">Vite</a>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
If you want to get a head start building your application, check out one of our official <a href="/docs/10.x/starter-kits">application starter kits</a>.</p>
</div>
<h3 id="laravel-the-api-backend"><a href="#laravel-the-api-backend">Laravel the API Backend</a></h3>
<p>Laravel may also serve as an API backend to a JavaScript single-page application or mobile application. For example, you might use Laravel as an API backend for your <a href="https://nextjs.org">Next.js</a> application. In this context, you may use Laravel to provide <a href="/docs/10.x/sanctum">authentication</a> and data storage / retrieval for your application, while also taking advantage of Laravel's powerful services such as queues, emails, notifications, and more.</p>
<p>If this is how you plan to use Laravel, you may want to check out our documentation on <a href="/docs/10.x/routing">routing</a>, <a href="/docs/10.x/sanctum">Laravel Sanctum</a>, and the <a href="/docs/10.x/eloquent">Eloquent ORM</a>.</p>
<div class="flex flex-col p-3 mb-10 space-y-4 text-base leading-normal border rounded-md lg:px-4 lg:flex-row lg:space-y-0 lg:space-x-4 border-sand-light-5 callout dark:border-sand-dark-5 dark:text-sand-light-3 text-sand-dark-3">
    <div class="w-8 h-8 p-2 lg:my-1.5 rounded-xs flex items-center justify-center shrink-0 bg-[#8D54C5]">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H11M5.5 14H10.5M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.7924 2.63505 13.2029 5 14.3264V17H11V14.3264C13.3649 13.2029 15 10.7924 15 8Z" stroke="#FDFDFC" stroke-width="1.5" stroke-linecap="square"/>
</svg>

    </div>
    <p class="callout text-pretty">
Need a head start scaffolding your Laravel backend and Next.js frontend? Laravel Breeze offers an <a href="/docs/10.x/starter-kits#breeze-and-next">API stack</a> as well as a <a href="https://github.com/laravel/breeze-next">Next.js frontend implementation</a> so you can get started in minutes.</p>
</div>
</div>
                        </section>
                    </section>
                </div>
            </section>

            <div class="hidden xl:block relative col-span-12 lg:pb-10 lg:col-span-9 lg:col-start-4 xl:col-start-auto xl:col-span-3">
                <div class="relative lg:sticky lg:top-28 pl-10">
                    <div>
    <h3 class="text-xs font-medium text-sand-light-11 dark:text-sand-dark-11 mb-3">
        On this page
    </h3>

    <div class="max-h-[calc(100vh-140px)] pb-5 overflow-y-auto">
        <div id="on-this-page-content"
            class="border-l border-sand-light-5 dark:border-sand-dark-5 pr-4">
                            <ul>
                                            <li class="mt-1.5 first:mt-0 py-0.5">
                            <a href="#meet-laravel"
                            class="inline-block border-l-[3px] border-transparent pl-4 text-[13px]
                                    text-sand-light-11 dark:text-sand-dark-11
                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                    [&[data-active='true']]:border-laravel-red
                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                Meet Laravel
                            </a>

                                                            <ul class="mt-1.5">
                                                                            <li class="py-0.5">
                                            <a href="#why-laravel"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Why Laravel?
                                            </a>
                                        </li>
                                                                    </ul>
                                                    </li>
                                            <li class="mt-1.5 first:mt-0 py-0.5">
                            <a href="#creating-a-laravel-project"
                            class="inline-block border-l-[3px] border-transparent pl-4 text-[13px]
                                    text-sand-light-11 dark:text-sand-dark-11
                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                    [&[data-active='true']]:border-laravel-red
                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                Creating a Laravel Project
                            </a>

                                                    </li>
                                            <li class="mt-1.5 first:mt-0 py-0.5">
                            <a href="#initial-configuration"
                            class="inline-block border-l-[3px] border-transparent pl-4 text-[13px]
                                    text-sand-light-11 dark:text-sand-dark-11
                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                    [&[data-active='true']]:border-laravel-red
                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                Initial Configuration
                            </a>

                                                            <ul class="mt-1.5">
                                                                            <li class="py-0.5">
                                            <a href="#environment-based-configuration"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Environment Based Configuration
                                            </a>
                                        </li>
                                                                            <li class="py-0.5">
                                            <a href="#databases-and-migrations"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Databases and Migrations
                                            </a>
                                        </li>
                                                                            <li class="py-0.5">
                                            <a href="#directory-configuration"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Directory Configuration
                                            </a>
                                        </li>
                                                                    </ul>
                                                    </li>
                                            <li class="mt-1.5 first:mt-0 py-0.5">
                            <a href="#docker-installation-using-sail"
                            class="inline-block border-l-[3px] border-transparent pl-4 text-[13px]
                                    text-sand-light-11 dark:text-sand-dark-11
                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                    [&[data-active='true']]:border-laravel-red
                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                Docker Installation Using Sail
                            </a>

                                                            <ul class="mt-1.5">
                                                                            <li class="py-0.5">
                                            <a href="#sail-on-macos"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Sail on macOS
                                            </a>
                                        </li>
                                                                            <li class="py-0.5">
                                            <a href="#sail-on-windows"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Sail on Windows
                                            </a>
                                        </li>
                                                                            <li class="py-0.5">
                                            <a href="#sail-on-linux"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Sail on Linux
                                            </a>
                                        </li>
                                                                            <li class="py-0.5">
                                            <a href="#choosing-your-sail-services"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Choosing Your Sail Services
                                            </a>
                                        </li>
                                                                    </ul>
                                                    </li>
                                            <li class="mt-1.5 first:mt-0 py-0.5">
                            <a href="#ide-support"
                            class="inline-block border-l-[3px] border-transparent pl-4 text-[13px]
                                    text-sand-light-11 dark:text-sand-dark-11
                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                    [&[data-active='true']]:border-laravel-red
                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                IDE Support
                            </a>

                                                    </li>
                                            <li class="mt-1.5 first:mt-0 py-0.5">
                            <a href="#next-steps"
                            class="inline-block border-l-[3px] border-transparent pl-4 text-[13px]
                                    text-sand-light-11 dark:text-sand-dark-11
                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                    [&[data-active='true']]:border-laravel-red
                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                Next Steps
                            </a>

                                                            <ul class="mt-1.5">
                                                                            <li class="py-0.5">
                                            <a href="#laravel-the-fullstack-framework"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Laravel the Full Stack Framework
                                            </a>
                                        </li>
                                                                            <li class="py-0.5">
                                            <a href="#laravel-the-api-backend"
                                            class="inline-block border-l-[3px] border-transparent pl-8 text-[13px]
                                                    text-sand-light-11 dark:text-sand-dark-11
                                                    hover:border-sand-dark-4/25 hover:text-sand-light-12
                                                    dark:hover:border-sand-light-4/25 dark:hover:text-sand-dark-12
                                                    [&[data-active='true']]:border-laravel-red
                                                    [&[data-active='true']]:text-sand-light-12 [&[data-active='true']]:dark:text-sand-dark-12">
                                                Laravel the API Backend
                                            </a>
                                        </li>
                                                                    </ul>
                                                    </li>
                                    </ul>
                    </div>
    </div>
</div>

                    
                </div>
            </div>
</div>
    </div>
            </div>
        </div>

        <div
    class="text-sand-dark-10">
    <div
        class="max-w-full w-full xl:max-w-[1400px] pt-10 md:pt-24 px-4 xl:px-16 mx-auto border-l border-sand-light-7 dark:border-sand-dark-6">
        <div class="grid grid-cols-12 lg:gap-12">
            <div class="col-span-12 lg:col-span-3 lg:mt-14">
                <p class="text-pretty">Laravel is the most productive way to<br class="block lg:hidden"> build, deploy, and monitor software.</p>

                <ul class="flex items-center justify-start my-8 space-x-6 lg:my-16">
                    <li>
                        <a href="https://github.com/laravel" target="_blank" title="Laravel on GitHub" class="transition duration-100 hover:text-sand-dark-6">
                            <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12.305C0 17.74 3.438 22.352 8.207 23.979C8.807 24.092 9.027 23.712 9.027 23.386C9.027 23.094 9.016 22.32 9.01 21.293C5.671 22.037 4.967 19.643 4.967 19.643C4.422 18.223 3.635 17.845 3.635 17.845C2.545 17.081 3.718 17.096 3.718 17.096C4.921 17.183 5.555 18.364 5.555 18.364C6.626 20.244 8.364 19.702 9.048 19.386C9.157 18.591 9.468 18.049 9.81 17.741C7.145 17.431 4.344 16.376 4.344 11.661C4.344 10.318 4.811 9.219 5.579 8.359C5.456 8.048 5.044 6.797 5.696 5.103C5.696 5.103 6.704 4.773 8.996 6.364C9.954 6.091 10.98 5.955 12.001 5.95C13.02 5.955 14.047 6.091 15.005 6.364C17.295 4.772 18.302 5.103 18.302 5.103C18.956 6.797 18.544 8.048 18.421 8.359C19.191 9.219 19.655 10.318 19.655 11.661C19.655 16.387 16.849 17.428 14.175 17.732C14.606 18.112 14.99 18.862 14.99 20.011C14.99 21.656 14.975 22.982 14.975 23.386C14.975 23.715 15.191 24.098 15.8 23.977C20.565 22.347 24 17.738 24 12.305C24 5.508 18.627 0 12 0C5.373 0 0 5.508 0 12.305Z"
        fill="currentColor"
    />
</svg>                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/laravelphp" target="_blank" title="Laravel on X" class="transition duration-100 hover:text-sand-dark-6">
                            <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M13.969 10.1571L22.7069 0H20.6363L13.0491 8.81931L6.9893 0H0L9.16366 13.3364L0 23.9877H2.07073L10.083 14.6742L16.4826 23.9877H23.4719L13.9684 10.1571H13.969ZM11.1328 13.4538L10.2043 12.1258L2.81684 1.55881H5.99736L11.9592 10.0867L12.8876 11.4147L20.6373 22.4998H17.4567L11.1328 13.4544V13.4538Z"
        fill="currentColor"
    />
</svg>                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@LaravelPHP" target="_blank" title="Laravel on YouTube" class="transition duration-100 hover:text-sand-dark-6">
                            <svg
    width="35"
    height="24"
    viewBox="0 0 35 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M33.892 3.75519C33.4994 2.27706 32.3428 1.11294 30.8742 0.717875C28.2124 0 17.5385 0 17.5385 0C17.5385 0 6.8648 0 4.20286 0.717875C2.7343 1.113 1.57768 2.27706 1.18511 3.75519C0.471863 6.43437 0.471863 12.0243 0.471863 12.0243C0.471863 12.0243 0.471863 17.6141 1.18511 20.2933C1.57768 21.7714 2.7343 22.8871 4.20286 23.2821C6.8648 24 17.5385 24 17.5385 24C17.5385 24 28.2123 24 30.8742 23.2821C32.3428 22.8871 33.4994 21.7714 33.892 20.2933C34.6052 17.6141 34.6052 12.0243 34.6052 12.0243C34.6052 12.0243 34.6052 6.43437 33.892 3.75519ZM14.0476 17.0994V6.94906L22.9688 12.0244L14.0476 17.0994Z"
        fill="currentColor"
    />
</svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.com/invite/laravel" target="_blank" title="Laravel on Discord" class="transition duration-100 hover:text-sand-dark-6">
                            <svg
    width="33"
    height="24"
    viewBox="0 0 33 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M27.4296 2.00996C25.3491 1.05745 23.1528 0.381713 20.8966 0C20.5879 0.551901 20.3086 1.11973 20.0598 1.70112C17.6566 1.33898 15.2127 1.33898 12.8095 1.70112C12.5605 1.11979 12.2812 0.551968 11.9726 0C9.71504 0.384937 7.51722 1.06228 5.43462 2.01494C1.30013 8.132 0.179328 14.0971 0.739727 19.9776C3.16099 21.7665 5.87108 23.127 8.75218 24C9.40092 23.1275 9.97497 22.2018 10.4682 21.2329C9.53134 20.883 8.62706 20.4512 7.76588 19.9427C7.99253 19.7783 8.2142 19.609 8.42839 19.4446C10.9342 20.623 13.6692 21.234 16.4384 21.234C19.2075 21.234 21.9425 20.623 24.4483 19.4446C24.665 19.6214 24.8867 19.7908 25.1108 19.9427C24.248 20.4521 23.3421 20.8846 22.4035 21.2354C22.8962 22.2039 23.4702 23.1287 24.1196 24C27.0031 23.1305 29.7153 21.7707 32.137 19.9801C32.7945 13.1606 31.0137 7.25031 27.4296 2.00996ZM11.1781 16.3611C9.61644 16.3611 8.32628 14.944 8.32628 13.2005C8.32628 11.457 9.57161 10.0274 11.1731 10.0274C12.7746 10.0274 14.0548 11.457 14.0274 13.2005C14 14.944 12.7696 16.3611 11.1781 16.3611ZM21.6986 16.3611C20.1345 16.3611 18.8493 14.944 18.8493 13.2005C18.8493 11.457 20.0946 10.0274 21.6986 10.0274C23.3026 10.0274 24.5729 11.457 24.5455 13.2005C24.5181 14.944 23.2902 16.3611 21.6986 16.3611Z"
        fill="currentColor"
    />
</svg>                        </a>
                    </li>
                </ul>

                <div>
                    <ul class="flex justify-start space-x-8">
                        <li>&copy; 2025 Laravel</li>
                        <li><a href="https://laravel.com/trademark" class="transition duration-100 hover:text-sand-dark-6">Legal</a></li>
                        <li><a href="https://status.laravel.com/" class="transition duration-100 hover:text-sand-dark-6">Status</a></li>
                    </ul>
                </div>
            </div>

            
            
            
            
            
            
            
            
            <div class="grid grid-cols-subgrid col-span-12 lg:col-span-9">
    <div class="grid grid-cols-subgrid mt-14 lg:mt-0 self-start lg:col-span-2 col-span-6 order-2">
    <h4 class="mb-8 text-base text-sand-light-12 dark:text-sand-dark-12 font-medium lg:col-span-2 col-span-6">
                            Products
                        </h4>

                                                    <ul class="col-span-6 mb-6 space-y-6 lg:mb-0 lg:col-span-2">
                                                                    <li>
                                        <a href="https://cloud.laravel.com" class="transition duration-100 hover:text-sand-dark-6">Cloud</a>
                                    </li>
                                                                    <li>
                                        <a href="https://forge.laravel.com" class="transition duration-100 hover:text-sand-dark-6">Forge</a>
                                    </li>
                                                                    <li>
                                        <a href="https://vapor.laravel.com" class="transition duration-100 hover:text-sand-dark-6">Vapor</a>
                                    </li>
                                                                    <li>
                                        <a href="https://nightwatch.laravel.com" class="transition duration-100 hover:text-sand-dark-6">Nightwatch</a>
                                    </li>
                                                                    <li>
                                        <a href="https://nova.laravel.com" class="transition duration-100 hover:text-sand-dark-6">Nova</a>
                                    </li>
                                                            </ul>
</div>
                                    <div class="grid grid-cols-subgrid mt-14 lg:mt-0 self-start lg:col-span-4 col-span-12 order-3">
    <h4 class="mb-8 text-base text-sand-light-12 dark:text-sand-dark-12 font-medium lg:col-span-4 col-span-12">
                            Packages
                        </h4>

                                                    <ul class="col-span-6 mb-6 space-y-6 lg:mb-0 lg:col-span-2">
                                                                    <li>
                                        <a href="/docs/cashier" class="transition duration-100 hover:text-sand-dark-6">Cashier</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/dusk" class="transition duration-100 hover:text-sand-dark-6">Dusk</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/horizon" class="transition duration-100 hover:text-sand-dark-6">Horizon</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/octane" class="transition duration-100 hover:text-sand-dark-6">Octane</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/scout" class="transition duration-100 hover:text-sand-dark-6">Scout</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/pennant" class="transition duration-100 hover:text-sand-dark-6">Pennant</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/pint" class="transition duration-100 hover:text-sand-dark-6">Pint</a>
                                    </li>
                                                            </ul>
                                                    <ul class="col-span-6 mb-6 space-y-6 lg:mb-0 lg:col-span-2">
                                                                    <li>
                                        <a href="/docs/sail" class="transition duration-100 hover:text-sand-dark-6">Sail</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/sanctum" class="transition duration-100 hover:text-sand-dark-6">Sanctum</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/socialite" class="transition duration-100 hover:text-sand-dark-6">Socialite</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/telescope" class="transition duration-100 hover:text-sand-dark-6">Telescope</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/pulse" class="transition duration-100 hover:text-sand-dark-6">Pulse</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/reverb" class="transition duration-100 hover:text-sand-dark-6">Reverb</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/broadcasting" class="transition duration-100 hover:text-sand-dark-6">Echo</a>
                                    </li>
                                                            </ul>
</div>
                                    <div class="grid grid-cols-subgrid mt-14 lg:mt-0 self-start lg:col-span-2 col-span-6 order-1">
    <h4 class="mb-8 text-base text-sand-light-12 dark:text-sand-dark-12 font-medium lg:col-span-2 col-span-6">
                            Resources
                        </h4>

                                                    <ul class="col-span-6 mb-6 space-y-6 lg:mb-0 lg:col-span-2">
                                                                    <li>
                                        <a href="/docs" class="transition duration-100 hover:text-sand-dark-6">Documentation</a>
                                    </li>
                                                                    <li>
                                        <a href="/starter-kits" class="transition duration-100 hover:text-sand-dark-6">Starter Kits</a>
                                    </li>
                                                                    <li>
                                        <a href="/docs/releases" class="transition duration-100 hover:text-sand-dark-6">Release Notes</a>
                                    </li>
                                                                    <li>
                                        <a href="https://blog.laravel.com" class="transition duration-100 hover:text-sand-dark-6">Blog</a>
                                    </li>
                                                                    <li>
                                        <a href="https://partners.laravel.com" class="transition duration-100 hover:text-sand-dark-6">Partners</a>
                                    </li>
                                                                    <li>
                                        <a href="https://laravel-news.com" class="transition duration-100 hover:text-sand-dark-6">News</a>
                                    </li>
                                                                    <li>
                                        <a href="https://larabelles.com/" class="transition duration-100 hover:text-sand-dark-6">Larabelles</a>
                                    </li>
                                                                    <li>
                                        <a href="https://larajobs.com/?partner=5" class="transition duration-100 hover:text-sand-dark-6">Jobs</a>
                                    </li>
                                                                    <li>
                                        <a href="/careers" class="transition duration-100 hover:text-sand-dark-6">Careers</a>
                                    </li>
                                                            </ul>
</div>
</div>

            <div class="col-span-12 text-sand-light-1">
                                    <svg class="w-full h-full text-laravel-red"
    width="1280"
    height="308"
    viewBox="0 0 1280 308"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M50.2753 0H0V308.689H144.713V263.27H50.2753V0Z"
        fill="currentColor"
    />
    <path
        d="M322.209 130.973C315.796 120.684 306.688 112.602 294.883 106.718C283.081 100.84 271.201 97.8969 259.253 97.8969C243.798 97.8969 229.665 100.764 216.843 106.496C204.014 112.228 193.015 120.099 183.834 130.091C174.654 140.088 167.51 151.628 162.412 164.706C157.308 177.792 154.761 191.54 154.761 205.94C154.761 220.645 157.308 234.457 162.412 247.39C167.508 260.332 174.652 271.796 183.834 281.788C193.015 291.785 204.017 299.647 216.843 305.379C229.665 311.111 243.798 313.978 259.253 313.978C271.201 313.978 283.081 311.038 294.883 305.159C306.688 299.282 315.796 291.197 322.209 280.904V308.685H369.865V103.186H322.209V130.973ZM317.837 231.076C314.922 239.016 310.841 245.925 305.598 251.804C300.35 257.687 294.009 262.389 286.579 265.917C279.146 269.445 270.905 271.208 261.875 271.208C252.837 271.208 244.676 269.445 237.391 265.917C230.104 262.389 223.839 257.687 218.593 251.804C213.345 245.925 209.335 239.016 206.57 231.076C203.794 223.138 202.417 214.759 202.417 205.942C202.417 197.12 203.794 188.742 206.57 180.804C209.335 172.866 213.345 165.961 218.593 160.078C223.839 154.201 230.102 149.493 237.391 145.965C244.676 142.437 252.837 140.674 261.875 140.674C270.908 140.674 279.146 142.437 286.579 145.965C294.009 149.493 300.35 154.199 305.598 160.078C310.844 165.961 314.922 172.866 317.837 180.804C320.748 188.742 322.209 197.12 322.209 205.942C322.209 214.759 320.748 223.138 317.837 231.076Z"
        fill="currentColor"
    />
    <path
        d="M709.568 130.973C703.155 120.684 694.047 112.602 682.242 106.718C670.44 100.84 658.56 97.8969 646.612 97.8969C631.157 97.8969 617.024 100.764 604.202 106.496C591.373 112.228 580.374 120.099 571.193 130.091C562.013 140.088 554.869 151.628 549.771 164.706C544.666 177.792 542.12 191.54 542.12 205.94C542.12 220.645 544.666 234.457 549.771 247.39C554.867 260.332 562.01 271.796 571.193 281.788C580.374 291.785 591.375 299.647 604.202 305.379C617.024 311.111 631.157 313.978 646.612 313.978C658.56 313.978 670.44 311.038 682.242 305.159C694.047 299.282 703.155 291.197 709.568 280.904V308.685H757.224V103.186H709.568V130.973ZM705.198 231.076C702.283 239.016 698.202 245.925 692.959 251.804C687.711 257.687 681.37 262.389 673.94 265.917C666.507 269.445 658.266 271.208 649.236 271.208C640.198 271.208 632.037 269.445 624.752 265.917C617.465 262.389 611.2 257.687 605.954 251.804C600.706 245.925 596.696 239.016 593.931 231.076C591.155 223.138 589.778 214.759 589.778 205.942C589.778 197.12 591.155 188.742 593.931 180.804C596.696 172.866 600.706 165.961 605.954 160.078C611.2 154.201 617.463 149.493 624.752 145.965C632.037 142.437 640.198 140.674 649.236 140.674C658.269 140.674 666.507 142.437 673.94 145.965C681.37 149.493 687.711 154.199 692.959 160.078C698.205 165.961 702.283 172.866 705.198 180.804C708.109 188.742 709.57 197.12 709.57 205.942C709.568 214.759 708.107 223.138 705.198 231.076Z"
        fill="currentColor"
    />
    <path
        d="M1280 1.12315e-05H1232.35V308.689H1280V1.12315e-05Z"
        fill="currentColor"
    />
    <path
        d="M407.466 308.689H455.117V150.486H536.876V103.192H407.466V308.689Z"
        fill="currentColor"
    />
    <path
        d="M948.281 103.192L888.386 260.557L828.489 103.192H780.224L858.441 308.689H918.331L996.546 103.192H948.281Z"
        fill="currentColor"
    />
    <path
        d="M1100.48 97.908C1042.13 97.908 995.937 146.279 995.937 205.944C995.937 271.9 1040.64 313.98 1106.59 313.98C1143.5 313.98 1167.06 299.745 1195.85 268.746L1163.66 243.621C1163.64 243.646 1139.36 275.802 1103.1 275.802C1060.96 275.802 1043.22 241.533 1043.22 223.803H1201.32C1209.62 155.913 1165.37 97.908 1100.48 97.908ZM1043.35 188.085C1043.71 184.13 1049.2 136.086 1100.1 136.086C1151.01 136.086 1157.19 184.123 1157.55 188.085H1043.35Z"
        fill="currentColor"
    />
</svg>                            </div>
        </div>
    </div>
</div>



        <!-- HubSpot -->
        

        
        <script type="text/javascript">
            !function(){"use strict";window.RudderSnippetVersion="3.0.60";var e="rudderanalytics";window[e]||(window[e]=[])
            ;var rudderanalytics=window[e];if(Array.isArray(rudderanalytics)){
            if(true===rudderanalytics.snippetExecuted&&window.console&&console.error){
            console.error("RudderStack JavaScript SDK snippet included more than once.")}else{rudderanalytics.snippetExecuted=true,
            window.rudderAnalyticsBuildType="legacy";var sdkBaseUrl="https://cdn.rudderlabs.com";var sdkVersion="v3"
            ;var sdkFileName="rsa.min.js";var scriptLoadingMode="async"
            ;var r=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession","consent"]
            ;for(var n=0;n<r.length;n++){var t=r[n];rudderanalytics[t]=function(r){return function(){var n
            ;Array.isArray(window[e])?rudderanalytics.push([r].concat(Array.prototype.slice.call(arguments))):null===(n=window[e][r])||void 0===n||n.apply(window[e],arguments)
            }}(t)}try{
            new Function('class Test{field=()=>{};test({prop=[]}={}){return prop?(prop?.property??[...prop]):import("");}}'),
            window.rudderAnalyticsBuildType="modern"}catch(i){}var d=document.head||document.getElementsByTagName("head")[0]
            ;var o=document.body||document.getElementsByTagName("body")[0];window.rudderAnalyticsAddScript=function(e,r,n){
            var t=document.createElement("script");t.src=e,t.setAttribute("data-loader","RS_JS_SDK"),r&&n&&t.setAttribute(r,n),
            "async"===scriptLoadingMode?t.async=true:"defer"===scriptLoadingMode&&(t.defer=true),
            d?d.insertBefore(t,d.firstChild):o.insertBefore(t,o.firstChild)},window.rudderAnalyticsMount=function(){!function(){
            if("undefined"==typeof globalThis){var e;var r=function getGlobal(){
            return"undefined"!=typeof self?self:"undefined"!=typeof window?window:null}();r&&Object.defineProperty(r,"globalThis",{
            value:r,configurable:true})}
            }(),window.rudderAnalyticsAddScript("".concat(sdkBaseUrl,"/").concat(sdkVersion,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkFileName),"data-rsa-write-key","2w8mFiDWValXyby6yHwgkH3Pb8X")
            },
            "undefined"==typeof Promise||"undefined"==typeof globalThis?window.rudderAnalyticsAddScript("https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=Symbol%2CPromise&callback=rudderAnalyticsMount"):window.rudderAnalyticsMount()
            ;var loadOptions={};rudderanalytics.load("2w8mFiDWValXyby6yHwgkH3Pb8X","https://laraveltrxdkoq.dataplane.rudderstack.com",loadOptions)}}}();
        </script>
        <script>
            if (typeof rudderanalytics !== 'undefined') {
                rudderanalytics.page();
            }
        </script>
    </body>
</html>
