import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser && storedUser !== "undefined") {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                setUser(null); // Navbar-da user görsənməsin deyə
                Swal.fire({
                    title: "Logged Out!",
                    text: "Logged Out Successfully..",
                    icon: "success"
                });
            }
        });

    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
