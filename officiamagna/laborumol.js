const itemsArray = (() => {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems;
  } else if (itemOrItems instanceof HTMLCollection || itemOrItems instanceof NodeList) {
    return Array.from(itemOrItems);
  }
  return [];
})();
