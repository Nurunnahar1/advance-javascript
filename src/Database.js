class Database {
  create = (key, data) => {
    const oldData = JSON.parse(localStorage.getItem(key));

    let newData = [];
    if (oldData) {
      newData = oldData;
    }

    newData.push(data);

    localStorage.setItem(key, JSON.stringify(newData));
  };
  find = () => {};
  delete = () => {};
}
