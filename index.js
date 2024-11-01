const urlToBuffer = async (url) => {
  const getUrl = await axios({
    method: "get",
    url,
    responseType: "arraybuffer",
  });

  const buffer = Buffer.from(getUrl.data, "binary");

  return buffer;
};

module.exports = urlToBuffer;
