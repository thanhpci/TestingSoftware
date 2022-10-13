const handlePoint = (averagePoint, pointTrainning) => {
    if (averagePoint > 10 || averagePoint < 0) {
        return "Invalid";
    }

    if (pointTrainning < 0 || pointTrainning > 100) {
        return "Invalid";
    }

    if (averagePoint >= 9) {
        if (pointTrainning >= 90) {
            return "Excellent";
        }

        if (pointTrainning >= 80) {
            return "Good";
        }

        if (pointTrainning >= 50) {
            return "Normal";
        }

        if (pointTrainning < 50) {
            return "Bad";
        }
    }

    if (averagePoint >= 7) {
        if (pointTrainning >= 80) {
            return "Good";
        }

        if (pointTrainning >= 50) {
            return "Normal";
        }

        if (pointTrainning < 50) {
            return "Bad";
        }
    }
    if (averagePoint >= 5) {
        if (pointTrainning >= 50) {
            return "Normal";
        }

        if (pointTrainning < 50) {
            return "Bad";
        }
    }

    return "Bad";
};

console.log(handlePoint(9, 90));

module.exports = handlePoint;