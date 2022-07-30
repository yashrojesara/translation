import { Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function BananaComponent() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const [language, setLanguage] = useState("Yoda");
  const languages = ["Dothraki", "Klingon", "Yoda"];

  const convert = async () => {
    const url = "https://api.funtranslations.com/translate/";

    const apiResponse = await fetch(
      `${url}${language.toLowerCase()}.json?text=${text}`
    );

    const data = await apiResponse.json();
    if (apiResponse.status === 429) {
      alert("Too Many Requests!!! Please try again later.");
    } else {
      const translation = data.contents.translated;
      setTranslation(translation);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1em",
      }}
    >
      <TextareaAutosize
        minRows={10}
        maxRows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type anything here that you want to translate"
        style={{ minWidth: "50%" }}
      />
      <RadioGroup
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        row
      >
        {languages.map((language) => (
          <FormControlLabel
            key={language}
            value={language}
            control={<Radio />}
            label={language}
          />
        ))}
      </RadioGroup>
      <Button
        style={{ margin: "1em" }}
        variant="outlined"
        color="secondary"
        disabled={!text}
        onClick={convert}
      >
        Translate
      </Button>
      <TextareaAutosize
        minRows={10}
        maxRows={10}
        value={translation}
        onChange={(e) => setText(e.target.value)}
        style={{ minWidth: "50%" }}
        disabled
      />
    </div>
  );
}

export default BananaComponent;
