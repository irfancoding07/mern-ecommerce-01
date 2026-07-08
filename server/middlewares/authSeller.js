import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
    console.log("Cookies:", req.cookies);

    const { sellerToken } = req.cookies;

    console.log("Seller Token:", sellerToken);

    if (!sellerToken) {
        return res.json({
            success: false,
            message: "Not Authorized",
        });
    }
    try {
        const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);

        if (decoded.email !== process.env.SELLER_EMAIL) {
            return res.json({
                success: false,
                message: "Not Authorized",
            });
        }

        req.seller = decoded.email;

        next();

    } catch (error) {
        return res.json({
            success: false,
            message: error.message,
        });
    }
};

 export default authSeller;