const testGetApi = async (req, res) => {

  try {
    // if (!name || !payment) {
    //   return res.status(400).send({ error: "All fields are required" });
    // }

    return res.status(201).send({ success: "This is a good test" });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ error: e.message });
  }
};

export { testGetApi };