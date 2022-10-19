import "./css/index.css"
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(cardFlag) {
  const colorsCardFlag = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"]
  }

  ccBgColor01.setAttribute("fill", colorsCardFlag[cardFlag][0])
  ccBgColor02.setAttribute("fill", colorsCardFlag[cardFlag][1])
  ccLogo.setAttribute("src", `cc-${cardFlag}.svg`)
}

globalThis.setCardType = setCardType
