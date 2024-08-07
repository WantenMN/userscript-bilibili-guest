const style = `

.recommended-swipe,
.login-panel-popover,
.login-tip,
.bili-login-card,
.bili-mini-mask,
.bpx-player-toast-auto,
.bpx-player-video-inputbar,
.up-info__btn-panel,
.h-f-btn
{
  display: none !important;
}

.right-entry {
  visibility: hidden !important;
}

.feed-card {
  margin-top: 0px !important;
}

`;

export default function blockElements() {
  GM_addStyle(style);
}
