import { Router } from 'express'
import { forgotPasswordController, loginController, logoutController, refreshToken, registerUserController, resetpassword, updateUserDetails, uploadAvatar, userDetails, verifyEmailController, verifyForgotPasswordOtp } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'


const UserRouter = Router();

UserRouter.post("/register", registerUserController);
UserRouter.post('/verify-email',verifyEmailController)
UserRouter.post('/login',loginController)
UserRouter.get('/logout',auth,logoutController)
UserRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
UserRouter.put('/update-user',auth,updateUserDetails)
UserRouter.put('/forgot-password',forgotPasswordController)
UserRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp)
UserRouter.put('/reset-password',resetpassword)
UserRouter.get('/refresh-token',refreshToken)
UserRouter.get('/user-details',auth,userDetails)

export default UserRouter;
