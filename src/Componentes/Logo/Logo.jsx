import "./Logo.css";

export const Logo = () => {
  return (
    <div class="contenedor">
      <div class="glass rotation">
        <svg
          class="sombra"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 490 490"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="none"
            stroke-width="36"
            stroke-linecap="round"
            d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"
          />
        </svg>
      </div>
      <div className="logo-y-lema">
        <div class="logo">CQV</div>
        <div class="lema">Con Qué Vicio</div>
      </div>
    </div>
  );
};
