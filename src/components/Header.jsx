import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkLight from "./DarkLight";
import Basketpop from "../components/Basketpop";
function Header() {
  const page = ["Kartlar", "Kampaniyalar", "Partnyorlar", "Əlaqə"];
  const pageRu = ["Карты", "Акции", "Партнеры", "Контакты"];
  const pageAngl = ["Cards", "Campaigns", "Partners", "Contact"];
  const [YazilarFilter, setYazilarFilter] = useState([]);
  const language = ["Aze", "Ru", "angl"];

  const [lang, setlang] = useState(localStorage.getItem("languages") || "Aze");
  const [ac, setac] = useState(false);
  // useEffect()
  const [user, setuser] = useState(
    localStorage.getItem("user") ||
      (localStorage.getItem("languages") === "Aze"
        ? "Şəxsi kabinet"
        : localStorage.getItem("languages") === "Ru"
        ? "Личный кабинет"
        : "Private cabinet")
  );
  // const b = localStorage.getItem('user');
  // console.log(JSON.parse(b));
  const [langac, setlangac] = useState(false);

  useEffect(() => {
    const filterYazilar = async () => {
      try {
        axios.get(`http://localhost:3300/yazilar`).then((e) => {
          setYazilarFilter(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    filterYazilar();
  }, []);

  return (
    <>   
      <header id="header">

        <nav
          className="nav"
          style={
            localStorage.getItem("darkLightMod") === "light"
              ? {
                  background: "linear-gradient(45deg, #76bc21, #8cc745)",
                  borderRadius:
                    window.location.pathname.split("/").length === 3
                      ? ""
                      : "0px 0px 20px 20px",
                }
              : {
                  background: "#132a13",
                  borderRadius:
                    window.location.pathname.split("/").length === 3
                      ? ""
                      : "0px 0px 20px 20px",
                }
          }
        >
          <div className="logo">
            <Link to={"/"}>tam.</Link>
          </div>
          <div className="page">
            <ul>
              {(localStorage.getItem("languages") === "Aze"
                ? page
                : localStorage.getItem("languages") === "Ru"
                ? pageRu
                : pageAngl
              ).map((item, index) => (
                <Link key={index} to={`${item}`}>
                  <li>{item}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="nav-right">
            <a className="phone" href="tel:+994506041905">
              <img
                src="https://tamkart.az/assets/frontend/style/img/call.svg"
                alt=""
              />
            </a>
            <div>
            <p
              className={
                localStorage.getItem("darkLightMod") === "light"
                  ? "languageLight"
                  : "languageDark"
              }
              onClick={() => setlangac(!langac)}
            >
              <i className="fa-solid fa-globe"></i>{" "}
              <strong>
                <img
                  src={
                    localStorage.getItem("languages") === "Aze"
                      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAllBMVEUfmMQbr2bhHTj///9IlLoKnMiSX3+CeFEHs2dFp2vmFDDnDzbgACbfACPhGjbgACj+9fbgDzD5297fAB7rfonxp67fAB3lR1nyr7b86+375unwoKjkQFTlABj4z9T1wsftjJb0ub/qdYHoXm7iJ0DvmKHjOk32yc7pbHj409fnX27lQlbtiJLmVWX1vsTrgIvjLkbeAAK347wbAAAE0ElEQVR4nO3b63KjRhCGYUUk2USZAw0GHa3T6mR5kZX7v7kg2wJM26tRlbfbpXzPv91SlaW3YBhmoPM7tHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmv6Ats6f0NbpKTM2vT/JrdH+KmedriJH1hR348V2Op1l890q96T5dc4Um5Dtzh+iptFgb41+FrUmlPcXERcv+qnT+k6vlJo4+zh9p8izbd/qVtFpQjRoHR7JYpBlg8V0GJf/mm2Mytd6pdLEFMNmkOmPPqXGl4y1rhgnUTQ2ioeKRhM7b46r81VKVBdw5NPJOBpt9MZa+SbONs6b4TLt8SPCeVrHey/+1V6JN3HpoU4yTj84GpzvHp60oog3yWf1wFrYjz/n0rsnpdNHuklenzjTC7NW6n/XiSLcxNTD6+z+0qWFjhuVq49sE+rXM7P7yx9Xuh6LNnE+PidJcu0Z/MdEm9RX4VjrGAgh2aRx5iiNnmEkm9hqZWCRCv7Zqwk2oaI6TILPHKdxigk2sdtq+hp62+s2K4Uock3c8brDxJVDjp2tFSb4ck38uhpNfjKlr/SSvaXVcz/Xkw0j18Qm5yZFyEWn/PjBlBkHqenN46PkKSTWpD514ndWBzg7LT95muJ9Lyc1w5Aj69OINaHduckhaIQ1zRXshehapFgTn51/4LoX8nmzbjRZ5p7kZnliTUy1bnJ5DutMaibNVexkls2XYlHEmqTVEHtxAcAVsyRidrfXxJyX6uPL07D2TseJ4PKs3BhbNQmYr79Z2X85SgSnKFJNHJ2XToZ0uQl1h2+TLCUvPF/yOPFF/DZJtJXcLv2K4wnd8eEk6H7gk8hdd0bh153JLntoR8lucIy9an5C3tplI0icPDwUYmePwjx2HjSPfXMCjf+1gpvqCvc726ChwTfn9slt3gNee198vgc8mNMBdpv3gF1bDbJBi/Y2iQau/PCRPK3Dllw+i+A6WzWgBF1XaTCxdhCd1h6dJ9FNUrkm9e5O2IZXeYZR/3XSK7t8L7hub6qb3eCFZ+rf+F4GVTOOOOCW58XNP1dQTe/DN3hUiO4X19Mw0XX4a4k+V1Df8yRfecNYtAlN6tn6F44i+5ySGVdR7gKGFNd9vPHrzkleLz7vLkZx9HTz153uafJVr6DtLkxnibLbvxaf0LGOsv7pM21+MtV40KKr8MxwY5yNtqsPJ7SUz4er/8kzw+WvfayPlPiHffd3U1qMQtb3fw2F9zLo2NjlGy1N+3Fq8nb/EM282rRO410V55v7fMOsbwyRO6Gyh++Py6ndUvENOJV3mpzdj6JmlsW82By7x0l/v96ezqxDN2jN9hdReh+QzLy9rRVV/7EtdF8IVHtv1PfuRu0qz2WyjfaLo3rvF7vy4pK1sgwXO6M3tp6pvodOPl8t14ftNJluX15E/wJvXJdN/lHWM2ma53maWt/T/i6vOt+grfMXtHV+gzY04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04Tp/Q9t/nmQ1RfSthKMAAAAASUVORK5CYII="
                      : localStorage.getItem("languages") === "Ru"
                      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////VKx4AOaYAGJ4AOq3fKgABXnTtAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII="
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAbFBMVEX////IEC4BIWnFABjrvcEAAF8AHmjICSvKKD3EAADHACahprwAB2HGACCprsIAGWfeiZH13N799vfTWmfEAAkAF2aaoLgAAFXFABPtxcjJITgAE2Xe4OfVZHDgk5vSU2Lz1tnRSVr67e7bfIeRPeizAAAFEElEQVR4nO3dbVcaMRAF4Fi76PpS38CqVEX9//+xWo9lgQWS3Htn4jlzP/UDbiYPsJTdMEmPV2lvTmfd5IcuZ6fLoY6PDnbk6HhQ1JmwpEk3HxR1/TRW1Un/vEgn/U0G4K8LIWBzfJNu9muAdzk9H8P75/b/H36AjfFNuotcvA8+d8Cm+IrwPvmcARviK8T74ssGnAgAm+ErxlvyOQI2wleBN+RzA2yCrwpvlc8JsAG+Srx1PhdAd75qvE0+B0BnPgAvpfOSB68Csv4b48oH4VX8AR/QkQ/EawLQjY+A1wCgEx8Jzx3QhY+I5wzowEfGcwU05yPizUkHAgCN+Qouhu6b8yytH6y3BzTl4843UZ+NOkBDPvaLJY0d1BjQjI8/z/R1YNbJtALQiE8xx6Q8eEt8mvkl9QBt8KnmlkSDlFzOkvPpXhhJNlA+oJhP+a5KwsFyAaV82lPSBp8DoJBPfT4f4TMHlPHp5zHKZ/wpLOKzeBFs4TMFlPDZvIO28hkCCvisTj87+MwA6Xx25+6dfEaAZD7LD749fCaAVD7br557+QwKIvJZf2/P4JMXReOzv+iRxSe+oEri87jom8nHv8zN5vO5Z5PNJ3x2CXxeN7wK+GSAMJ/fvZoiPtHJGeTzvE9TyCd5piE+15tc5XyCggE+X7wqPvrXomo+b7xKPjJgV8fXueNV81EBu9savtvOHQ/gYwL+qeEb/JHf2kSAT7LIMJ+Pgwf+vALiEwAW83niwXx0wEI+718FpA7P7+G5//rybiR9/7Lg872+9f3IYNMcvNP3svFkzckwFee+yDLBByX4oAQflOCDEnxQgg9K8EEJPijfje9nU7l/2M33cO9d4WrSYVvZqffu513fWkYakUTyE3xQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPiixwgpKrO+D4r06cz3fbXVpYwk+KMEHJfigBB+U4IMSfFCCD0rwQflufIR2EiudNLbl6mY62mHj7XXlYRS+xctoh427y+vlY0idNLh9XLbj9SebGufT4YR4fHnjUfq4NIVHfPNmAfp2EaLjUc99FoC0DmrIJNAOahCgTwc1Hh6jf58XIKV7JFQ8qXukDyChdymIR+td6gEId84lFE3rnGsPCPZtphRM7NtsDQh1DScVS+0abgsI9KwvLLTfWii5Zz2tLi6frEj6jgl2gJX7dVALFOzXYQVYtVsMuTjJbjE2gBV7FRUWtv/kLNqryAKweKcsOp5wpyxBraV8BgUJ92lTAxbtEigqRrpLIFQztkug0TMp3qNSCZi9Q6oMz2CHVB1g5v68QjyT/XlVgFm7Q0vxjHaH1gBm7E2uGVjPZzGPET5jPCGf/l20wWeOJ+VTAybZYPm3AKV8WsAkGqjk/qmYTwmYLAbx5tPNLS0HoN/DaIhPBZi0z047fJo5ps8De90rsORTzDO54xny8eea3PFM+diAae6NZ8xHBZztP45+mZcxH/OeiD+eA59kYacTngufCaDRAmsXPjmg1ep0Lz4poBmeI58M0BDPlQ8EPPTHc+bDAGvx4B+UDOLMhwD64zXAVw/oj9cEXy2gP14jfHWA/njN8NUAluHxPm2HaYavHNAfrym+UkB/vMb4ygC347Euhu5PY3wlF1TT4nkM7+Doafi7/5kQr0G+D8D5oKitgI9/ASzsca5ETv80AAAAAElFTkSuQmCC"
                  }
                  alt=""
                />{" "}
                {/* {localStorage.getItem("languages") === "Aze"
                  ? "Azərbaycan dili"
                  : localStorage.getItem("languages") === "Ru"
                  ? "Русский язык"
                  : "English language"} */}
              </strong>
              {langac && (
                <ul>
                  {language.map((item, id) => (
                    <li
                      onClick={() => {
                        setlang(item),
                          location.reload(),
                          localStorage.removeItem("kategoriya");
                      }}
                      key={id}
                    >
                      <span>
                        <img
                          src={
                            item === "Aze"
                              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAllBMVEUfmMQbr2bhHTj///9IlLoKnMiSX3+CeFEHs2dFp2vmFDDnDzbgACbfACPhGjbgACj+9fbgDzD5297fAB7rfonxp67fAB3lR1nyr7b86+375unwoKjkQFTlABj4z9T1wsftjJb0ub/qdYHoXm7iJ0DvmKHjOk32yc7pbHj409fnX27lQlbtiJLmVWX1vsTrgIvjLkbeAAK347wbAAAE0ElEQVR4nO3b63KjRhCGYUUk2USZAw0GHa3T6mR5kZX7v7kg2wJM26tRlbfbpXzPv91SlaW3YBhmoPM7tHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmv6Ats6f0NbpKTM2vT/JrdH+KmedriJH1hR348V2Op1l890q96T5dc4Um5Dtzh+iptFgb41+FrUmlPcXERcv+qnT+k6vlJo4+zh9p8izbd/qVtFpQjRoHR7JYpBlg8V0GJf/mm2Mytd6pdLEFMNmkOmPPqXGl4y1rhgnUTQ2ioeKRhM7b46r81VKVBdw5NPJOBpt9MZa+SbONs6b4TLt8SPCeVrHey/+1V6JN3HpoU4yTj84GpzvHp60oog3yWf1wFrYjz/n0rsnpdNHuklenzjTC7NW6n/XiSLcxNTD6+z+0qWFjhuVq49sE+rXM7P7yx9Xuh6LNnE+PidJcu0Z/MdEm9RX4VjrGAgh2aRx5iiNnmEkm9hqZWCRCv7Zqwk2oaI6TILPHKdxigk2sdtq+hp62+s2K4Uock3c8brDxJVDjp2tFSb4ck38uhpNfjKlr/SSvaXVcz/Xkw0j18Qm5yZFyEWn/PjBlBkHqenN46PkKSTWpD514ndWBzg7LT95muJ9Lyc1w5Aj69OINaHduckhaIQ1zRXshehapFgTn51/4LoX8nmzbjRZ5p7kZnliTUy1bnJ5DutMaibNVexkls2XYlHEmqTVEHtxAcAVsyRidrfXxJyX6uPL07D2TseJ4PKs3BhbNQmYr79Z2X85SgSnKFJNHJ2XToZ0uQl1h2+TLCUvPF/yOPFF/DZJtJXcLv2K4wnd8eEk6H7gk8hdd0bh153JLntoR8lucIy9an5C3tplI0icPDwUYmePwjx2HjSPfXMCjf+1gpvqCvc726ChwTfn9slt3gNee198vgc8mNMBdpv3gF1bDbJBi/Y2iQau/PCRPK3Dllw+i+A6WzWgBF1XaTCxdhCd1h6dJ9FNUrkm9e5O2IZXeYZR/3XSK7t8L7hub6qb3eCFZ+rf+F4GVTOOOOCW58XNP1dQTe/DN3hUiO4X19Mw0XX4a4k+V1Df8yRfecNYtAlN6tn6F44i+5ySGVdR7gKGFNd9vPHrzkleLz7vLkZx9HTz153uafJVr6DtLkxnibLbvxaf0LGOsv7pM21+MtV40KKr8MxwY5yNtqsPJ7SUz4er/8kzw+WvfayPlPiHffd3U1qMQtb3fw2F9zLo2NjlGy1N+3Fq8nb/EM282rRO410V55v7fMOsbwyRO6Gyh++Py6ndUvENOJV3mpzdj6JmlsW82By7x0l/v96ezqxDN2jN9hdReh+QzLy9rRVV/7EtdF8IVHtv1PfuRu0qz2WyjfaLo3rvF7vy4pK1sgwXO6M3tp6pvodOPl8t14ftNJluX15E/wJvXJdN/lHWM2ma53maWt/T/i6vOt+grfMXtHV+gzY04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04dCEQxMOTTg04Tp/Q9t/nmQ1RfSthKMAAAAASUVORK5CYII="
                              : item === "Ru"
                              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////VKx4AOaYAGJ4AOq3fKgABXnTtAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII="
                              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAbFBMVEX////IEC4BIWnFABjrvcEAAF8AHmjICSvKKD3EAADHACahprwAB2HGACCprsIAGWfeiZH13N799vfTWmfEAAkAF2aaoLgAAFXFABPtxcjJITgAE2Xe4OfVZHDgk5vSU2Lz1tnRSVr67e7bfIeRPeizAAAFEElEQVR4nO3dbVcaMRAF4Fi76PpS38CqVEX9//+xWo9lgQWS3Htn4jlzP/UDbiYPsJTdMEmPV2lvTmfd5IcuZ6fLoY6PDnbk6HhQ1JmwpEk3HxR1/TRW1Un/vEgn/U0G4K8LIWBzfJNu9muAdzk9H8P75/b/H36AjfFNuotcvA8+d8Cm+IrwPvmcARviK8T74ssGnAgAm+ErxlvyOQI2wleBN+RzA2yCrwpvlc8JsAG+Srx1PhdAd75qvE0+B0BnPgAvpfOSB68Csv4b48oH4VX8AR/QkQ/EawLQjY+A1wCgEx8Jzx3QhY+I5wzowEfGcwU05yPizUkHAgCN+Qouhu6b8yytH6y3BzTl4843UZ+NOkBDPvaLJY0d1BjQjI8/z/R1YNbJtALQiE8xx6Q8eEt8mvkl9QBt8KnmlkSDlFzOkvPpXhhJNlA+oJhP+a5KwsFyAaV82lPSBp8DoJBPfT4f4TMHlPHp5zHKZ/wpLOKzeBFs4TMFlPDZvIO28hkCCvisTj87+MwA6Xx25+6dfEaAZD7LD749fCaAVD7br557+QwKIvJZf2/P4JMXReOzv+iRxSe+oEri87jom8nHv8zN5vO5Z5PNJ3x2CXxeN7wK+GSAMJ/fvZoiPtHJGeTzvE9TyCd5piE+15tc5XyCggE+X7wqPvrXomo+b7xKPjJgV8fXueNV81EBu9savtvOHQ/gYwL+qeEb/JHf2kSAT7LIMJ+Pgwf+vALiEwAW83niwXx0wEI+718FpA7P7+G5//rybiR9/7Lg872+9f3IYNMcvNP3svFkzckwFee+yDLBByX4oAQflOCDEnxQgg9K8EEJPijfje9nU7l/2M33cO9d4WrSYVvZqffu513fWkYakUTyE3xQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPiixwgpKrO+D4r06cz3fbXVpYwk+KMEHJfigBB+U4IMSfFCCD0rwQflufIR2EiudNLbl6mY62mHj7XXlYRS+xctoh427y+vlY0idNLh9XLbj9SebGufT4YR4fHnjUfq4NIVHfPNmAfp2EaLjUc99FoC0DmrIJNAOahCgTwc1Hh6jf58XIKV7JFQ8qXukDyChdymIR+td6gEId84lFE3rnGsPCPZtphRM7NtsDQh1DScVS+0abgsI9KwvLLTfWii5Zz2tLi6frEj6jgl2gJX7dVALFOzXYQVYtVsMuTjJbjE2gBV7FRUWtv/kLNqryAKweKcsOp5wpyxBraV8BgUJ92lTAxbtEigqRrpLIFQztkug0TMp3qNSCZi9Q6oMz2CHVB1g5v68QjyT/XlVgFm7Q0vxjHaH1gBm7E2uGVjPZzGPET5jPCGf/l20wWeOJ+VTAybZYPm3AKV8WsAkGqjk/qmYTwmYLAbx5tPNLS0HoN/DaIhPBZi0z047fJo5ps8De90rsORTzDO54xny8eea3PFM+diAae6NZ8xHBZztP45+mZcxH/OeiD+eA59kYacTngufCaDRAmsXPjmg1ep0Lz4poBmeI58M0BDPlQ8EPPTHc+bDAGvx4B+UDOLMhwD64zXAVw/oj9cEXy2gP14jfHWA/njN8NUAluHxPm2HaYavHNAfrym+UkB/vMb4ygC347Euhu5PY3wlF1TT4nkM7+Doafi7/5kQr0G+D8D5oKitgI9/ASzsca5ETv80AAAAAElFTkSuQmCC"
                          }
                          alt=""
                        />{" "}
                      </span>
                    
                    </li>
                  ))}
                </ul>
              )}
            </p>

            {localStorage.setItem("languages", lang)}
          </div>
          <DarkLight></DarkLight>
          {
            localStorage.getItem("user") && (
               <Basketpop></Basketpop>
            )
          }
         
            <a
              className="kabinet"
              style={
                ac
                  ? { borderRadius: "20px 20px 0 0" }
                  : { borderRadius: "20px" }
              }
              onClick={() => setac(!ac)}
            >
              {/* <i class="fa-regular fa-circle-user"></i> */}
              <strong>
                <img
                  src="https://tamkart.az/assets/frontend/style/img/login.svg"
                  alt=""
                />
              </strong>
              {/* <span onClick={() => localStorage.setItem("login", true)}>
                {user}
              </span> */}
              {ac && (
                <div className="kabinet-gizli">
                  {localStorage.getItem("user") ? (
                    <p
                      style={{ color: "red" }}
                      onClick={() => (
                        localStorage.removeItem("user"), location.reload()
                      )}
                    >
                      {" "}
                      <strong style={{ color: "red" }}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </strong>{" "}
                      {/* cixis */}
                    </p>
                  ) : (
                    <p>
                      <Link style={{ color: "#80C132" }} to={"/Login-Registr"}>
                        <strong style={{ color: "#80C132" }}>
                          <i className="fa-solid fa-right-from-bracket"></i>
                        </strong>{" "}
                        {/* giris */}
                      </Link>
                    </p>
                  )}
                </div>
              )}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
