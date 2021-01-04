import React from "react";
import "font-awesome/css/font-awesome.min.css";

function SocialShare() {
  return (
    <ul class="menu bottomRight">
      <li class="share top">
        <i class="fa fa-share-alt" aria-hidden="true"></i>
        <ul class="submenu">
          <li>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//formteamsforme.netlify.app/&title=&summary=&source="
              class="googlePlus"
              target="_blank"
            >
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/intent/tweet"
              class="twitter"
              target="_blank"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/sharer.php"
              class="facebook"
              target="_blank"
            >
              <i class="fa fa-facebook"></i>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
export default SocialShare;
