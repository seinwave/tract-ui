import * as utils from "./utils";
import team from "./teamData";

it("returns a capitalized string", () => {
  // single word
  const singleStarterString = "jean";
  let finishedString = utils.capitalize(singleStarterString);
  expect(finishedString).toEqual("Jean");

  // two words
  const twoStarterString = "jean luc";
  finishedString = utils.capitalizeMultiple(twoStarterString);
  expect(finishedString).toEqual("Jean Luc");

  // x words
  const threeStarterString = "jean luc picard";
  finishedString = utils.capitalizeMultiple(threeStarterString);
  expect(finishedString).toEqual("Jean Luc Picard");
  const manyStarterString = "jean luc picard, captain of the enterprise";
  finishedString = utils.capitalizeMultiple(manyStarterString);
  expect(finishedString).toEqual("Jean Luc Picard, Captain Of The Enterprise");
});

it("manages a typeahead search", () => {
  //todo: get this working with human-readable dates
  //todo: AND get the typeAheadFilter utility easily imported
  const dataset = team.team;
  let expected = [
    {
      user_id: 7,
      user_full_name: "Agatha Borpo",
      user_role: "admin",
      user_created_date: "2015-12-12 00:00:00",
      user_activity: [
        { timestamp: "2021-1-12 00:00:00", activity: "delete comment" },
        { timestamp: "2021-1-21 00:00:00", activity: "add attachment" },
      ],
      user_email: "a.Runcie.11@live.nl",
      ticket_title: "Too much gray",
      project_name: "Inventory tracker",
    },
    {
      user_id: 4,
      user_full_name: "Agatha Johnston",
      user_role: "pm",
      user_activity: [
        { timestamp: "2021-1-12 00:00:00", activity: "delete comment" },
        { timestamp: "2021-1-21 00:00:00", activity: "add attachment" },
      ],
      user_created_date: "2015-12-12 00:00:00",
      user_email: "Julianne.Mayor.71@zonnet.nl",
      ticket_title: "Data's confusing",
      project_name: "Landing page",
    },
  ];
  let result = utils.typeAheadFilter(dataset, "agath");
  expect(result).toEqual(expected);
  result = utils.typeAheadFilter(dataset, "willie");
  expect(result).not.toEqual(expected);
});
