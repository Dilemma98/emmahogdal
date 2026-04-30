export default function FlowerWreath() {
  return (
    <div style={{ position: "absolute", top: 20, left: 13, width: 190, transform: "rotate(-2deg)", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" }}>
      <svg width="100%" viewBox="0 0 680 420" role="img" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{`
            .leaf-back  { fill: #2a5c3000; }
            .leaf-front { fill: #4e9e57; }
            .petal-white  { fill: #f0ebe0; }
            .petal-pink   { fill: #d9849a; }
            .petal-yellow { fill: #e8c83a; }
            .petal-blue   { fill: #6a9ec4; }
            .petal-purple { fill: #9e6ab8; }
            .cy { fill: #e8b830; }
            .co { fill: #d07010; }
          `}</style>
        </defs>

        {/* ── BAKRE BÅGE ─────────────────────────────── */}
        <ellipse
          cx="340" cy="210" rx="190" ry="20"
          fill="none" stroke="#2a5c3005" strokeWidth="10"
          strokeDasharray="600 1000" strokeDashoffset="-10"
          opacity="0.55"
        />

        {/* Löv bakre bågen – vid cy≈190 (toppen av ellipsen) */}
        <g className="leaf-back" opacity="0">
          <ellipse cx="240" cy="194" rx="6" ry="10" transform="rotate(-20,240,194)"/>
          <ellipse cx="280" cy="191" rx="6" ry="10" transform="rotate(-10,280,191)"/>
          <ellipse cx="340" cy="190" rx="6" ry="10" transform="rotate(0,340,190)"/>
          <ellipse cx="400" cy="191" rx="6" ry="10" transform="rotate(10,400,191)"/>
          <ellipse cx="440" cy="194" rx="6" ry="10" transform="rotate(20,440,194)"/>
        </g>

        {/* Lila blomma bakre vänster */}
        <g transform="translate(268,191)" opacity="0">
          <ellipse className="petal-purple" cx="0" cy="-6" rx="3" ry="6"/>
          <ellipse className="petal-purple" cx="0" cy="-6" rx="3" ry="6" transform="rotate(60)"/>
          <ellipse className="petal-purple" cx="0" cy="-6" rx="3" ry="6" transform="rotate(120)"/>
          <ellipse className="petal-purple" cx="0" cy="-6" rx="3" ry="6" transform="rotate(180)"/>
          <ellipse className="petal-purple" cx="0" cy="-6" rx="3" ry="6" transform="rotate(240)"/>
          <ellipse className="petal-purple" cx="0" cy="-6" rx="3" ry="6" transform="rotate(300)"/>
          <circle className="cy" cx="0" cy="0" r="4"/>
        </g>

        {/* Rosa blomma bakre mitten */}
        <g transform="translate(340,190)" opacity="0">
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6"/>
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6" transform="rotate(45)"/>
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6" transform="rotate(90)"/>
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6" transform="rotate(135)"/>
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6" transform="rotate(180)"/>
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6" transform="rotate(225)"/>
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6" transform="rotate(270)"/>
          <ellipse className="petal-pink" cx="0" cy="-6" rx="3" ry="6" transform="rotate(315)"/>
          <circle className="cy" cx="0" cy="0" r="4"/>
        </g>

        {/* Blå blomma bakre höger */}
        <g transform="translate(412,191)" opacity="0">
          <ellipse className="petal-blue" cx="0" cy="-6" rx="3" ry="6"/>
          <ellipse className="petal-blue" cx="0" cy="-6" rx="3" ry="6" transform="rotate(60)"/>
          <ellipse className="petal-blue" cx="0" cy="-6" rx="3" ry="6" transform="rotate(120)"/>
          <ellipse className="petal-blue" cx="0" cy="-6" rx="3" ry="6" transform="rotate(180)"/>
          <ellipse className="petal-blue" cx="0" cy="-6" rx="3" ry="6" transform="rotate(240)"/>
          <ellipse className="petal-blue" cx="0" cy="-6" rx="3" ry="6" transform="rotate(300)"/>
          <circle className="cy" cx="0" cy="0" r="4"/>
        </g>

        {/* ── FRÄMRE BÅGE ──────────────────────────────── */}
        <ellipse
          cx="340" cy="210" rx="190" ry="20"
          fill="none" stroke="#3a7d44" strokeWidth="18"
          strokeDasharray="590 1000" strokeDashoffset="200"
        />
        <ellipse
          cx="340" cy="210" rx="190" ry="20"
          fill="none" stroke="#5ab065" strokeWidth="10"
          strokeDasharray="590 1000" strokeDashoffset="200"
        />

        {/* Löv främre bågen – vid cy≈228-232 (botten av ellipsen) */}
        <g className="leaf-front">
          <ellipse cx="155" cy="210" rx="7" ry="11" transform="rotate(-80,155,210)"/>
          <ellipse cx="195" cy="222" rx="7" ry="11" transform="rotate(-55,195,222)"/>
          <ellipse cx="240" cy="228" rx="7" ry="11" transform="rotate(-30,240,228)"/>
          <ellipse cx="290" cy="231" rx="7" ry="11" transform="rotate(-10,290,231)"/>
          <ellipse cx="340" cy="232" rx="7" ry="11" transform="rotate(0,340,232)"/>
          <ellipse cx="390" cy="231" rx="7" ry="11" transform="rotate(10,390,231)"/>
          <ellipse cx="440" cy="228" rx="7" ry="11" transform="rotate(30,440,228)"/>
          <ellipse cx="485" cy="222" rx="7" ry="11" transform="rotate(55,485,222)"/>
          <ellipse cx="525" cy="210" rx="7" ry="11" transform="rotate(80,525,210)"/>
        </g>

        {/* Rosa blomma – vänster sida */}
        <g transform="translate(152,210)">
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10"/>
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10" transform="rotate(45)"/>
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10" transform="rotate(90)"/>
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10" transform="rotate(135)"/>
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10" transform="rotate(180)"/>
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10" transform="rotate(225)"/>
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10" transform="rotate(270)"/>
          <ellipse className="petal-pink" cx="0" cy="-10" rx="5" ry="10" transform="rotate(315)"/>
          <circle className="cy" cx="0" cy="0" r="7"/>
        </g>

        {/* Vit blomma – vänster */}
        <g transform="translate(210,225)">
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11"/>
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11" transform="rotate(45)"/>
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11" transform="rotate(90)"/>
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11" transform="rotate(135)"/>
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11" transform="rotate(180)"/>
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11" transform="rotate(225)"/>
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11" transform="rotate(270)"/>
          <ellipse className="petal-white" cx="0" cy="-11" rx="5" ry="11" transform="rotate(315)"/>
          <circle className="cy" cx="0" cy="0" r="7"/>
        </g>

        {/* Gul blomma – vänster mitten */}
        <g transform="translate(278,231)">
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(40)"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(80)"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(120)"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(160)"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(200)"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(240)"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(280)"/>
          <ellipse className="petal-yellow" cx="0" cy="-11" rx="5" ry="11" transform="rotate(320)"/>
          <circle className="co" cx="0" cy="0" r="7"/>
        </g>

        {/* Rosa blomma – mitten (störst, längst fram) */}
        <g transform="translate(340,232)">
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13"/>
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13" transform="rotate(45)"/>
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13" transform="rotate(90)"/>
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13" transform="rotate(135)"/>
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13" transform="rotate(180)"/>
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13" transform="rotate(225)"/>
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13" transform="rotate(270)"/>
          <ellipse className="petal-pink" cx="0" cy="-13" rx="6" ry="13" transform="rotate(315)"/>
          <circle className="cy" cx="0" cy="0" r="8"/>
        </g>

        {/* Blå blomma – höger mitten */}
        <g transform="translate(402,231)">
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11"/>
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11" transform="rotate(45)"/>
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11" transform="rotate(90)"/>
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11" transform="rotate(135)"/>
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11" transform="rotate(180)"/>
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11" transform="rotate(225)"/>
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11" transform="rotate(270)"/>
          <ellipse className="petal-blue" cx="0" cy="-11" rx="5" ry="11" transform="rotate(315)"/>
          <circle className="cy" cx="0" cy="0" r="7"/>
        </g>

        {/* Lila blomma – höger */}
        <g transform="translate(470,225)">
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11"/>
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11" transform="rotate(45)"/>
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11" transform="rotate(90)"/>
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11" transform="rotate(135)"/>
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11" transform="rotate(180)"/>
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11" transform="rotate(225)"/>
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11" transform="rotate(270)"/>
          <ellipse className="petal-purple" cx="0" cy="-11" rx="5" ry="11" transform="rotate(315)"/>
          <circle className="co" cx="0" cy="0" r="7"/>
        </g>

        {/* Vit blomma – höger sida */}
        <g transform="translate(528,210)">
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10"/>
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10" transform="rotate(45)"/>
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10" transform="rotate(90)"/>
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10" transform="rotate(135)"/>
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10" transform="rotate(180)"/>
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10" transform="rotate(225)"/>
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10" transform="rotate(270)"/>
          <ellipse className="petal-white" cx="0" cy="-10" rx="5" ry="10" transform="rotate(315)"/>
          <circle className="cy" cx="0" cy="0" r="7"/>
        </g>

      </svg>
    </div>
  );
}