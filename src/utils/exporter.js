const baseState = {
    kind: "character",
    data: {
        name: "",
        initiative: 0,
        externalUrl: "",
        iconUrl: null,
        commands: "",
        status: [
            { label: "HP", value: 0, max: 0 }
        ],
        params: [
          { label: "STR", value: "1" },
          { label: "DEX", value: "1" },
          { label: "CON", value: "1" },
          { label: "INT", value: "1" },
          { label: "WIS", value: "1" },
          { label: "CHA", value: "1" },
          { label: "StrProf", value: "-5" },
          { label: "DexProf", value: "-5" },
          { label: "ConProf", value: "-5" },
          { label: "IntProf", value: "-5" },
          { label: "WisProf", value: "-5" },
          { label: "ChaProf", value: "-5" }
        ],
        memo: ""
    }
};

function exportToClipboard(showMsg) {
    showMsg(true);
}

export {
    exportToClipboard
};