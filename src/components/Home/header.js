import React from 'react';

const Header = () => {
    return (

        <header id="header" className="header has-sticky sticky-jump">
            <div className="header-wrapper">
                <div id="masthead" className="header-main ">
                    <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">

                        <!-- Logo -->
                        <div id="logo" className="flex-col logo">

                            <!-- Header logo -->
                            <a href="https://biusagiistore.com/"
                               title="Bi&amp;U Store - Chuyên Quần Áo Nam Hot Trend Toàn Quốc" rel="home">
                                <img width="1020" height="173"
                                     src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201020%20173'%3E%3C/svg%3E"
                                     className="header_logo header-logo" alt="Bi&amp;U Store"
                                     data-lazy-src="https://biusagiistore.com/wp-content/uploads/2023/07/logo-wweb-1024x174.jpg"/>
                                <noscript><img width="1020" height="173"
                                               src="https://biusagiistore.com/wp-content/uploads/2023/07/logo-wweb-1024x174.jpg"
                                               className="header_logo header-logo" alt="Bi&amp;U Store"/></noscript>
                                <img width="1020" height="173"
                                     src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201020%20173'%3E%3C/svg%3E"
                                     className="header-logo-dark" alt="Bi&amp;U Store"
                                     data-lazy-src="https://biusagiistore.com/wp-content/uploads/2023/07/logo-wweb-1024x174.jpg"/>
                                <noscript><img width="1020" height="173"
                                               src="https://biusagiistore.com/wp-content/uploads/2023/07/logo-wweb-1024x174.jpg"
                                               className="header-logo-dark" alt="Bi&amp;U Store"/></noscript>
                            </a>
                        </div>

                        <!-- Mobile Left Elements -->
                        <div className="flex-col show-for-medium flex-left">
                            <ul className="mobile-nav nav nav-left ">
                                <li className="nav-icon has-icon">
                                    <a href="#" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay"
                                       data-color="" className="is-small" aria-label="Menu" aria-controls="main-menu"
                                       aria-expanded="false">

                                        <i className="icon-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Left Elements -->
                        <div className="flex-col hide-for-medium flex-left
            flex-grow">
                            <ul className="header-nav header-nav-main nav nav-left  nav-line-grow nav-size-large nav-uppercase">
                                <li id="menu-item-4772"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3616 current_page_item menu-item-4772 active menu-item-design-default">
                                    <a href="https://biusagiistore.com/" aria-current="page" className="nav-top-link">Trang
                                        Chủ</a></li>
                                <li id="menu-item-5238"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5238 menu-item-design-default has-dropdown">
                                    <a href="#" className="nav-top-link" aria-expanded="false" aria-haspopup="menu">Áo<i
                                        className="icon-angle-down"></i></a>
                                    <ul className="sub-menu nav-dropdown nav-dropdown-default">
                                        <li id="menu-item-5237"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5237">
                                            <a href="https://biusagiistore.com/product-category/ao-polo-wash-loang/">Áo
                                                Polo
                                                Wash Loang</a></li>
                                        <li id="menu-item-5236"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5236">
                                            <a href="https://biusagiistore.com/product-category/ao-wash-loang-co-tron/">Áo
                                                Wash loang cổ tròn</a></li>
                                        <li id="menu-item-5239"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5239">
                                            <a href="https://biusagiistore.com/product-category/ao-thun/">Áo Thun</a>
                                        </li>
                                        <li id="menu-item-5241"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5241">
                                            <a href="https://biusagiistore.com/product-category/ao-kem-phu-kien/">Áo Kèm
                                                Phụ
                                                Kiện</a></li>
                                        <li id="menu-item-5565"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5565">
                                            <a href="https://biusagiistore.com/product-category/ao-tanktop/">Áo
                                                TankTop</a>
                                        </li>
                                        <li id="menu-item-5242"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5242">
                                            <a href="https://biusagiistore.com/product-category/ao-so-mi/">Áo Sơ Mi</a>
                                        </li>
                                        <li id="menu-item-7437"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7437">
                                            <a href="https://biusagiistore.com/product-category/ao-khoac/">Áo Khoác</a>
                                        </li>
                                        <li id="menu-item-6837"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6837">
                                            <a href="https://biusagiistore.com/product-category/set-ao-quan/">Set Áo
                                                Quần</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-5235"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5235 menu-item-design-default has-dropdown">
                                    <a href="#" className="nav-top-link" aria-expanded="false" aria-haspopup="menu">Quần<i
                                        className="icon-angle-down"></i></a>
                                    <ul className="sub-menu nav-dropdown nav-dropdown-default">
                                        <li id="menu-item-5243"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5243">
                                            <a href="https://biusagiistore.com/product-category/quan-au-cap-cao/">Quần
                                                Âu
                                                Cạp Cao</a></li>
                                        <li id="menu-item-5244"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5244">
                                            <a href="https://biusagiistore.com/product-category/quan-kaki/">Quần
                                                KaKi</a>
                                        </li>
                                        <li id="menu-item-5245"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5245">
                                            <a href="https://biusagiistore.com/product-category/quan-jean">Quần Jean</a>
                                        </li>
                                        <li id="menu-item-5247"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5247">
                                            <a href="https://biusagiistore.com/product-category/quan-short-au/">Quần
                                                Short
                                                Âu</a></li>
                                        <li id="menu-item-5248"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5248">
                                            <a href="https://biusagiistore.com/product-category/quan-dui/">Quần Đùi</a>
                                        </li>
                                        <li id="menu-item-6539"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6539">
                                            <a href="https://biusagiistore.com/product-category/quan-short-tui-hop">Quần
                                                Short Túi Hộp</a></li>
                                        <li id="menu-item-6836"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6836">
                                            <a href="https://biusagiistore.com/product-category/set-ao-quan/">Set Áo
                                                Quần</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-5258"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5258 menu-item-design-default has-dropdown">
                                    <a href="#" className="nav-top-link" aria-expanded="false" aria-haspopup="menu">Móc
                                        Khóa
                                        ĐTCL<i className="icon-angle-down"></i></a>
                                    <ul className="sub-menu nav-dropdown nav-dropdown-default">
                                        <li id="menu-item-5260"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5260">
                                            <a href="https://biusagiistore.com/product-category/combo-moc-khoa/">Combo
                                                Chìa
                                                Khóa</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-5249"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5249 menu-item-design-default">
                                    <a href="https://biusagiistore.com/lien-he-voi-chung-toi/" className="nav-top-link">LIÊN
                                        HỆ</a></li>
                                <li id="menu-item-4853"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-4853 menu-item-design-default">
                                    <a href="https://biusagiistore.com/faqs-2/" className="nav-top-link">Chính Sách</a>
                                </li>
                            </ul>
                        </div>

                        <!-- Right Elements -->
                        <div className="flex-col hide-for-medium flex-right">
                            <ul className="header-nav header-nav-main nav nav-right  nav-line-grow nav-size-large nav-uppercase">
                                <li className="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children">
                                    <a href="#" aria-label="Tìm kiếm" className="is-small"><i
                                        className="icon-search"></i></a>
                                    <ul className="nav-dropdown nav-dropdown-default">
                                        <li className="header-search-form search-form html relative has-icon">
                                            <div className="header-search-form-wrapper">
                                                <div className="searchform-wrapper ux-search-box relative is-normal">
                                                    <form role="search" method="get" className="searchform"
                                                          action="https://biusagiistore.com/">
                                                        <div className="flex-row relative">
                                                            <div className="flex-col flex-grow">
                                                                <label className="screen-reader-text"
                                                                       htmlFor="woocommerce-product-search-field-0">Tìm
                                                                    kiếm:</label>
                                                                <input type="search"
                                                                       id="woocommerce-product-search-field-0"
                                                                       className="search-field mb-0"
                                                                       placeholder="Tìm kiếm&hellip;" value=""
                                                                       name="s"/>
                                                                <input type="hidden" name="post_type" value="product"/>
                                                            </div>
                                                            <div className="flex-col">
                                                                <button type="submit" value="Tìm kiếm"
                                                                        className="ux-search-submit submit-button secondary button  icon mb-0"
                                                                        aria-label="Submit">
                                                                    <i className="icon-search"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="live-search-results text-left z-top"></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-divider"></li>
                                <li className="cart-item has-icon has-dropdown">
                                    <div className="header-button">
                                        <a href="https://biusagiistore.com/cart/" title="Giỏ hàng"
                                           className="header-cart-link icon primary button circle is-small">


<span className="header-cart-title">
   Giỏ hàng   /      <span className="cart-price"><span className="woocommerce-Price-amount amount"><bdi>0<span
    className="woocommerce-Price-currencySymbol">&#8363;</span></bdi></span></span>
  </span>

                                            <i className="icon-shopping-cart"
                                               data-icon-label="0">
                                            </i>
                                        </a>
                                    </div>
                                    <ul className="nav-dropdown nav-dropdown-default">
                                        <li className="html widget_shopping_cart">
                                            <div className="widget_shopping_cart_content">


                                                <p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm
                                                    trong giỏ
                                                    hàng.</p>


                                            </div>
                                        </li>
                                    </ul>

                                </li>
                            </ul>
                        </div>

                        <!-- Mobile Right Elements -->
                        <div className="flex-col show-for-medium flex-right">
                            <ul className="mobile-nav nav nav-right ">
                                <li className="cart-item has-icon">

                                    <div className="header-button"><a href="https://biusagiistore.com/cart/"
                                                                      className="header-cart-link off-canvas-toggle nav-top-link icon primary button circle is-small"
                                                                      data-open="#cart-popup"
                                                                      data-class="off-canvas-cart"
                                                                      title="Giỏ hàng" data-pos="right">

                                        <i className="icon-shopping-cart"
                                           data-icon-label="0">
                                        </i>
                                    </a>
                                    </div>

                                    <!-- Cart Sidebar Popup -->
                                    <div id="cart-popup" className="mfp-hide widget_shopping_cart">
                                        <div className="cart-popup-inner inner-padding">
                                            <div className="cart-popup-title text-center">
                                                <h4 className="uppercase">Giỏ hàng</h4>
                                                <div className="is-divider"></div>
                                            </div>
                                            <div className="widget_shopping_cart_content">


                                                <p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm
                                                    trong giỏ
                                                    hàng.</p>


                                            </div>
                                            <div className="cart-sidebar-content relative"></div>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="container">
                        <div className="top-divider full-width"></div>
                    </div>
                </div>

                <div className="header-bg-container fill">
                    <div className="header-bg-image fill"></div>
                    <div className="header-bg-color fill"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;