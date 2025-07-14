import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/authstore'
import Xhibit from './Xhibit'
import Xchange from './Xchange'
import Xclusives from './Xclusives'
import {
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import bgImage from "@/assets/4.png"
import xure from "../public/New-Xure-logo.png"
import phone from "../public/XurePhones.png"
import { Eye, EyeOff } from 'lucide-react'
import { Loader2 } from 'lucide-react'
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [userError, setUserError] = useState('')
  const [passError, setPassError] = useState('')
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()
  const [openDialog, setOpenDialog] = useState(false)
  const validate = () => {
    let hasError = false
    if (!username.trim()) {
      setUserError("Please enter your email.")
      hasError = true
    } else {
      setUserError("")
    }
    if (!password.trim()) {
      setPassError("Please enter your password.")
      hasError = true
    } else {
      setPassError("")
    }
    return !hasError
  }

  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false)
  const handleLogin = () => {
  const isValid = validate();
  if (!isValid) return;

  setLoading(true);
  setLoginError(""); // reset on new attempt

  setTimeout(() => {
    const success = login(username, password);
    setLoading(false);

    if (!success) {
      setLoginError("Invalid username or password.");
      return;
    }

    setPassword("");
    setUsername("");
    navigate('/xhibit');
  }, 2000);
};



  return (
    <div 
      className="flex min-h-svh flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <title>Xure App</title>
      <div className="w-1/3 h-[140px] flex items-start justify-start">
        <img src={xure} alt="Xure Logo" className="h-[51px] mt-[53px] ml-[55px]" />
      </div>
      <div className="w-full flex h-full flex-row">
        <div className="flex flex-row">
          <img src={phone} alt="XurePhones" className="h-full w-[850px] ml-[-80px] mr-[-190px]"/>
          <div className="flex flex-col w-full leading-[48px] justify-center">
            <h2 className="text-[#CEAE7B] font-bold text-[48px]">UNLOCK</h2>
            <h2 className="text-white font-normal text-[48px]">YOUR INNER</h2>
            <h2 className="text-[#CEAE7B] font-bold text-[48px]">TREASURE</h2>
          </div>
        </div>
        <div className="w-1/3 h-[550px] ml-[40px] mt-[-30px] mb-[-30px] flex items-center justify-center">
          <div className="h-[512px] bg-[#18181B] w-[358px] rounded">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-[20px] font-bold mt-[30px]">Sign In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 mt-[20px]"> 
              <Input 
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  if (userError) setUserError('')
                }}
                type="email" 
                placeholder={userError ? userError : "Email"}
                className={`h-[40px] text-white ${
                  userError
                    ? "border-red-400 placeholder-red-400"
                    : "border-[#71717A] placeholder-gray-400"
                }`}
              />
              <div className="relative w-full h-[40px]">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={passError ? passError : "Password"}
                  className={`pr-10 h-[40px] text-white ${
                    passError
                      ? "border-red-400 placeholder-red-400"
                      : "border-[#71717A] placeholder-gray-400"
                  } focus-visible:ring-0 focus-visible:ring-offset-0`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (passError) setPassError('')
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleLogin()
                  }}
                />
                {showPassword ? (
                  <EyeOff
                    onClick={() => setShowPassword(false)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
                    size={18}
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
                    size={18}
                  />
                )}
              </div>


              <Button
                onClick={handleLogin}
                disabled={loading}
                className={`w-full h-[36px] mt-[20px] cursor-pointer bg-[#4C1D83] ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                  </span>
                ) : (
                  'Login'
                )}
              </Button>
                {/* Error message below button with reserved space */}
                <div className="h-[12px]">
                  {loginError && (
                    <p className="text-red-400 text-sm text-center">{loginError}</p>
                  )}
                </div>


              <span className="flex justify-end font-bold text-[#CEAE7B] text-[12px] cursor-pointer">Forgot your password?</span>
              <div className="flex items-center justify-between text-sm text-[#71717A] mb-6 mt-[30px]">
                <div className="flex-grow h-px bg-[#71717A]"></div>
                <span className="mx-3 text-[12px]">or Sign in with</span>
                <div className="flex-grow h-px bg-[#71717A]"></div>
              </div>
              <div className="flex justify-center gap-6 mb-6">
                <div className="w-[60px] h-[60px] rounded-full bg-[#3F3F46] flex items-center justify-center cursor-pointer">
                  <FaGoogle size={28} color="#DB4437" />
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-[#3F3F46] flex items-center justify-center cursor-pointer">
                  <FaFacebookF size={28} color="#1877F2" />
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-[#3F3F46] flex items-center justify-center cursor-pointer">
                  <FaApple size={28} color="#000000" />
                </div>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don’t have an account?{" "}
                <span className="text-[#CEAE7B] cursor-pointer font-medium">Sign up</span>
              </p>
            </CardContent>
          </div>
        </div>
      </div>

    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Xhibit" element={<Xhibit />} />
      <Route path="/Xchange" element={<Xchange />} />
      <Route path="/Xclusives" element={<Xclusives />} />
    </Routes>
  )
}

export default App