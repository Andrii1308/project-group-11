!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("23Ajj"),n("xpKCW"),n("i8Q71"),n("c01wF");document.querySelector(".js-go-to-cart"),document.querySelector(".js-list");var i=document.querySelector(".js-list"),c="shoppingList",s=JSON.parse(localStorage.getItem(c))||[];function r(e){return e.map((function(e){var t,o,n,i=e.author,c=e.book_image,s=e.buy_links,r=e.description,a=e.title;return'\n    <li data-id="'.concat(a,'" class="js-product shopping-list-item">\n        <img src="').concat(c,'" alt="').concat(a,'" width="116" height="165" class="shop-img"/> \n        <div class="shop-item-div">\n            <div class="top-item-div">\n                <h2 class="shopping-list-title">').concat(a,'</h2>\n                <button class="js-remove" data-id="').concat(a,'">\n                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n                </button>\n            </div>\n            <p class="shopping-list-text">').concat((t=r,o=18,n=t.split(" "),n.length<=o?t:n.slice(0,o).join(" ")+" ..."),'</p>\n            <div class="author-icons">\n                <p class="shopping-list-author">').concat(i,'</p>\n                <div class="book-links">\n                    ').concat(function(e){return'<a href="'.concat(e[0].url,'" target="_blank"> <img src="/project-group-11/amazon.a7ec3af8.png" alt="Link Icon" class="link-icon amazon" width="32" height="11"></a>\n    <a href="').concat(e[1].url,'" target="_blank"> <img src="/project-group-11/apple-books.a9f158e0.png" alt="Link Icon" class="link-icon apple-book" width="16" height="16"></a>\n    <a href="').concat(e[2].url,'" target="_blank"> <img src="/project-group-11/book-shop.eb5fbc1e.png" alt="Link Icon" class="link-icon book-shop" width="16" height="16"></a>')}(s),"\n                </div>\n            </div>\n        </div>\n    </li>\n")})).join("")}if(console.log(r(s)),null===localStorage.getItem("shoppingList")){var a=document.querySelector(".is-hidden"),l=document.querySelector(".cart");a.classList.remove("is-hidden"),l.classList.add("cart")}else{var d=r(s);i.insertAdjacentHTML("beforeend",d)}var u=document.querySelectorAll(".js-remove");function p(e){var t=e.target.closest(".js-product");if(t&&(t.remove(),localStorage.removeItem("shoppingList"),console.log("Данные удалены из локального хранилища."),function(){var e=[];if(u.forEach((function(t){var o=t.getAttribute("data-id");e.push(o)})),localStorage.setItem("selectedProducts",JSON.stringify(e)),console.log(localStorage),0===e.length){document.querySelector(".message").classList.remove("is-hidden")}}(),!document.querySelector(".shopping-list-item"))){var o=document.querySelector(".is-hidden"),n=document.querySelector(".cart");o.classList.remove("is-hidden"),n.classList.add("cart")}}window.addEventListener("beforeunload",(function(){localStorage.setItem(c)})),u.forEach((function(e){e.addEventListener("click",p)}))}();
//# sourceMappingURL=shoppinglist.d368e3b5.js.map
