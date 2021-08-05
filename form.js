window.onload = () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  document.querySelector("#message").innerHTML = "";

  chrome.storage.local.get(
    [
      "preferred_fc",
      "email",
      "name",
      "uid",
      "vaccination",
      "q1",
      "q2",
      "q3",
      "q4",
      "q5",
      "q6",
      "q7",
      "q8",
      "declaration",
    ],
    (result) => {
      if (result.preferred_fc === "c10001Tab") {
        document.querySelector("#c10001Tab").click();
      } else if (result.preferred_fc === "c10002Tab") {
        document.querySelector("#c10002Tab").click();
      } else if (result.preferred_fc === "c10003Tab") {
        document.querySelector("#c10003Tab").click();
      }

      document.querySelector("#email").value = result.email;
      document.querySelector("#name").value = result.name;
      document.querySelector("#uid").value = result.uid;

      if (result.vaccination !== null) {
        if (result.vaccination) {
          document.querySelector("#vaccination_t").checked = true;
        } else {
          document.querySelector("#vaccination_f").checked = true;
        }
      }

      if (result.q1) {
        document.querySelector("#q1_t").checked = true;
      } else {
        document.querySelector("#q1_f").checked = true;
      }

      if (result.q2) {
        document.querySelector("#q2_t").checked = true;
      } else {
        document.querySelector("#q2_f").checked = true;
      }

      if (result.q3) {
        document.querySelector("#q3_t").checked = true;
      } else {
        document.querySelector("#q3_f").checked = true;
      }

      if (result.q4) {
        document.querySelector("#q4_t").checked = true;
      } else {
        document.querySelector("#q4_f").checked = true;
      }

      if (result.q5) {
        document.querySelector("#q5_t").checked = true;
      } else {
        document.querySelector("#q5_f").checked = true;
      }

      if (result.q6) {
        document.querySelector("#q6_t").checked = true;
      } else {
        document.querySelector("#q6_f").checked = true;
      }

      if (result.q7) {
        document.querySelector("#q7_t").checked = true;
      } else {
        document.querySelector("#q7_f").checked = true;
      }

      if (result.q8) {
        document.querySelector("#q8_t").checked = true;
      } else {
        document.querySelector("#q8_f").checked = true;
      }

      if (result.declaration) {
        document.querySelector("#declaration").checked = true;
      } else {
        document.querySelector("#declaration").checked = false;
      }
    }
  );

  document.querySelector("#save").onclick = () => {
    if (document.querySelector("#c10001Tab").checked) {
      newPreferred_fc = "c10001Tab";
    } else if (document.querySelector("#c10002Tab").checked) {
      newPreferred_fc = "c10002Tab";
    } else if (document.querySelector("#c10003Tab").checked) {
      newPreferred_fc = "c10003Tab";
    }

    var newEmail = chrome.storage.local.get("email");
    if (document.querySelector("#email").value) {
      newEmail = document.querySelector("#email").value;
    } else {
      window.scrollTo(0, 0);
      alert("Email?");
    }

    var newName = chrome.storage.local.get("name");
    if (document.querySelector("#name").value) {
      newName = document.querySelector("#name").value;
    } else {
      window.scrollTo(0, 0);
      alert("Name?");
    }

    var newUid = chrome.storage.local.get("uid");
    if (document.querySelector("#uid").value) {
      newUid = document.querySelector("#uid").value;
    } else {
      window.scrollTo(0, 0);
      alert("Student/Staff/CSE Sports Membership No.?");
    }

    var newVaccination = null;
    if (
      !document.querySelector("#vaccination_t").checked &&
      !document.querySelector("#vaccination_f").checked
    ) {
      window.scrollTo(0, 0);
      alert("Have you completed the full COVID-19 vaccination course?");
    } else if (document.querySelector("#vaccination_t")) {
      newVaccination = true;
    } else {
      newVaccination = false;
    }

    var newQ1;
    if (document.querySelector("#q1_t").checked) {
      newQ1 = true;
    } else {
      newQ1 = false;
    }

    var newQ2;
    if (document.querySelector("#q2_t").checked) {
      newQ2 = true;
    } else {
      newQ2 = false;
    }

    var newQ3;
    if (document.querySelector("#q3_t").checked) {
      newQ3 = true;
    } else {
      newQ3 = false;
    }

    var newQ4;
    if (document.querySelector("#q4_t").checked) {
      newQ4 = true;
    } else {
      newQ4 = false;
    }

    var newQ5;
    if (document.querySelector("#q5_t").checked) {
      newQ5 = true;
    } else {
      newQ5 = false;
    }

    var newQ6;
    if (document.querySelector("#q6_t").checked) {
      newQ6 = true;
    } else {
      newQ6 = false;
    }

    var newQ7;
    if (document.querySelector("#q7_t").checked) {
      newQ7 = true;
    } else {
      newQ7 = false;
    }

    var newQ8;
    if (document.querySelector("#q8_t").checked) {
      newQ8 = true;
    } else {
      newQ8 = false;
    }

    var newDeclaration;
    if (document.querySelector("#declaration").checked) {
      newDeclaration = true;
    } else {
      newDeclaration = false;
    }

    chrome.storage.local.set({
      preferred_fc: newPreferred_fc,
      email: newEmail,
      name: newName,
      uid: newUid,
      vaccination: newVaccination,
      q1: newQ1,
      q2: newQ2,
      q3: newQ3,
      q4: newQ4,
      q5: newQ5,
      q6: newQ6,
      q7: newQ7,
      q8: newQ8,
      declaration: newDeclaration,
    });

    document.querySelector("#message").innerHTML = `
      <div class="alert alert-primary" role="alert">
        All changes (if any) updated.
      </div>
    `;
    window.scrollTo(0, 0);
  };
};
