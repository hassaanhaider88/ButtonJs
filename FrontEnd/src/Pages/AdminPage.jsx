import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BGURI from "../lib/BGURI";

const AdminPage = () => {
  const navigate = useNavigate();
  const [AllButtons, setAllButtons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const Res = await fetch(`${BGURI}/api/buttons/all`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      const data = await Res.json();
      if (data.success) {
        setAllButtons(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      throw new Error(error || "Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const toggleLive = async (id) => {
    try {
      const res = await fetch(`${BGURI}/api/buttons/update-button/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ IsLive: true }),
      });

      const data = await res.json();
      console.log(data);

      if (!data.success) {
        throw new Error("Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something Went Wrong")
    }
  };

  const deletBtn = async (id) => {
    const IsConfirm = confirm("Are you sure you want to delete this button?");
    if (!IsConfirm) return;
    try {
      const res = await fetch(`${BGURI}/api/buttons/delete-button/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Button Deleted Successfully");
        fetchAdminData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Something Went Wrong");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold text-[#3ECBF8] mb-6">
        Admin Panel - Buttons
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto border border-[#3ECBF8]/20 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[#111] text-[#3ECBF8]">
              <tr>
                <th className="p-3 text-left">Id</th>
                <th className="p-3 text-left">Creator</th>
                <th className="p-3 text-left">Views</th>
                <th className="p-3 text-left">Copies</th>
                <th className="p-3 text-left">Live</th>
                <th className="p-3 text-left">Delete</th>
              </tr>
            </thead>

            <tbody>
              {AllButtons.map((btn) => (
                <tr
                  key={btn._id}
                  className="border-t border-[#222] hover:bg-[#0f0f0f]"
                >
                  <Link to={`/view-code/${btn._id}`}>
                    <td className="p-3">{btn._id || btn.buttonCategory}</td>
                  </Link>
                  <td className="p-3 text-gray-400 text-xs">
                    {btn.creatorEmail}
                  </td>
                  <td className="p-3">{btn.NumberOfViews}</td>

                  {/* 🔥 Toggle */}
                  <td className="p-3">
                    <button
                      disabled={btn.IsLive}
                      onClick={() => toggleLive(btn._id)}
                      className={`px-4 py-1 rounded-full text-xs font-semibold transition 
                        ${btn.IsLive
                          ? "bg-green-500 cursor-not-allowed text-black"
                          : "bg-gray-700 cursor-pointer text-white"
                        }`}
                    >
                      {btn.IsLive ? "LIVE" : "OFF"}
                    </button>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deletBtn(btn._id)}
                      className={`px-4 py-1 rounded-full cursor-pointer text-xs font-semibold transition bg-red-400`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
