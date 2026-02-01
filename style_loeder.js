
(function () {
  const head = document.head;

  const styles = [
    // === Download Manager ===
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/download-manager/assets/wpdm-iconfont/css/wpdm-icons.css?ver=6.9"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/download-manager/assets/css/front.min.css?ver=6.9"
    },

    // === Google Fonts ===
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,500,600,700,800&subset=latin,latin-ext"
    },

    // === Theme Edubin ===
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/themes/edubin/style.css?ver=6.9"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/themes/edubin/assets/fonts/flaticon_edubin.css?ver=9.4.3"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/themes/edubin/assets/css/swiper-bundle.min.css?ver=9.4.3"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/themes/edubin/assets/css/metisMenu.min.css?ver=9.4.3"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/themes/edubin/assets/css/tipped.min.css?ver=9.4.3"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/themes/edubin/assets/css/nice-select.css?ver=9.4.3"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/themes/edubin/assets/css/main.css?ver=9.4.3"
    },

    // === Plugins ===
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/3d-flipbook-dflip-lite/assets/css/dflip.min.css?ver=2.4.20"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/sassy-social-share/public/css/sassy-social-share-public.css?ver=3.3.79"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/tablepress/css/build/default.css?ver=3.2.6"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/edubin-core/assets/css/edubin-core.css?ver=9.4.5"
    },

    // === Elementor Core ===
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.34.1"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.34.1"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.34.1"
    },

    // === Elementor Widgets ===
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.34.1"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.34.1"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.34.1"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.34.1"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css?ver=3.34.1"
    },

    // === Elementor Local Fonts ===
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/uploads/elementor/google-fonts/css/roboto.css"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/uploads/elementor/google-fonts/css/robotoslab.css"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/uploads/elementor/google-fonts/css/robotocondensed.css"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/uploads/elementor/google-fonts/css/cuprum.css"
    },
    {
      rel: "stylesheet",
      href: "https://fmipa.unj.ac.id/wp-content/uploads/elementor/google-fonts/css/risque.css"
    }
  ];

  styles.forEach(attrs => {
    const link = document.createElement("link");
    Object.keys(attrs).forEach(key => {
      link.setAttribute(key, attrs[key]);
    });
    head.appendChild(link);