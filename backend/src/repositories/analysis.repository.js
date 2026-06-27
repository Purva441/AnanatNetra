const prisma = require("../config/prisma");

const createAnalysis = (data) => {
  return prisma.analysis.create({
    data,
  });
};

const getAnalysisHistory = () => {
  return prisma.analysis.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

module.exports = {
  createAnalysis,
  getAnalysisHistory,
};
