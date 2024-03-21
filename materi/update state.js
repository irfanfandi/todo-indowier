// Updating a nested object
setPerson({
  ...person, // Copy other fields
  artwork: {
    // but replace the artwork
    ...person.artwork, // with the same one
    city: "New Delhi", // but in New Delhi!
  },
});

// Update array
setArtists(
  // Replace the state
  [
    // with a new array
    ...artists, // that contains all the old items
    { id: nextId++, name: name }, // and one new item at the end
  ]
);

// Updating objects inside arrays
//  WRONG
const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);

// CORRECT
setMyList(
  myList.map((artwork) => {
    if (artwork.id === artworkId) {
      // Create a *new* object with changes
      return { ...artwork, seen: nextSeen };
    } else {
      // No changes
      return artwork;
    }
  })
);
// OR
setMyList((draft) => {
  const artwork = draft.find((a) => a.id === id);
  artwork.seen = nextSeen;
});
