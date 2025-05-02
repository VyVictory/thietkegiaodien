"use client";
import { useLayout } from "../../context/LayoutProvider";
import { motion, AnimatePresence } from "framer-motion";
import { RegisterForm } from "./AuthModal/RegisterForm";
import { LoginForm } from "./AuthModal/LoginForm";

export default function Login() {
  const { setModal, LoginForm: currentForm } = useLayout();

  const modalVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div
      onClick={() => setModal(null)}
      className="fixed inset-0 w-screen h-screen z-[60] flex items-center justify-center bg-black bg-opacity-95"
    >
      <AnimatePresence>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            key={currentForm} // Important for triggering inner form animation
          >
            <AnimatePresence mode="wait">
              {currentForm === "Login" ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.2 }}
                >
                  <LoginForm />
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.2 }}
                >
                  <RegisterForm />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
