import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/lib/auth-context";
import { UserType } from "@/lib/types";
import { Camera, Save, Pencil, X, ArrowLeft } from "lucide-react";

export function ProfilePage() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user?.fullName ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");

  useEffect(() => {
    if (user) {
      setFullName(user.fullName);
      setEmail(user.email ?? "");
      setPhone(user.phone);
    }
  }, [user?.id]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Loading profile...</p>
      </div>
    );
  }

  const initials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const getDashboardLink = () => {
    switch (user.userType) {
      case UserType.ADMIN:
        return "/admin";
      case UserType.DONOR:
        return "/donor";
      case UserType.BENEFICIARY:
        return "/beneficiary";
      default:
        return "/";
    }
  };

  const handleSave = () => {
    updateUser({
      fullName: fullName.trim() || user.fullName,
      email: email.trim() || user.email,
      phone: phone.trim() || user.phone,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFullName(user.fullName);
    setEmail(user.email ?? "");
    setPhone(user.phone);
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      updateUser({ profileImageUrl: dataUrl });
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const removeProfileImage = () => {
    updateUser({ profileImageUrl: undefined });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="max-w-6xl mx-auto space-y-4 animate-in fade-in duration-500 pt-0">
      {/* Profile Identity Section - Now at the absolute top */}
      <div className="relative pt-0 mt-0">
        <div className="px-6 flex flex-col sm:flex-row items-center sm:items-end gap-6 pt-0">
          <div className="relative group mt-0">
            <Avatar className="h-24 w-24 border-2 border-background shadow-lg rounded-xl overflow-hidden ring-1 ring-slate-100 dark:ring-slate-800">
              <AvatarImage src={user.profileImageUrl} alt={user.fullName} className="object-cover" />
              <AvatarFallback className="text-3xl font-bold bg-teal-500 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 h-9 w-9 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95 flex items-center justify-center translate-x-2 translate-y-2"
              title="Change Photo"
            >
              <Camera className="h-5 w-5 text-teal-600" />
            </button>
          </div>

          <div className="flex-1 pb-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-0">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{user.fullName}</h1>
              <span className="px-2 py-0.5 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                {user.userType}
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{user.email || "No email provided"}</p>
          </div>

          <div className="flex gap-2 pb-1">
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                size="sm"
                className="rounded-lg font-bold"
                variant="default"
              >
                <Pencil className="h-3.5 w-3.5 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" className="rounded-xl font-semibold" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="rounded-xl font-semibold bg-teal-600 hover:bg-teal-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Account Quick Facts */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden">
            <CardHeader className="pb-3 px-6 pt-6">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Account Overview</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-500 font-medium">Account ID</span>
                <span className="text-xs font-mono font-medium text-slate-400">#{user.id.substring(0, 8)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-500 font-medium">Joined Date</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-500 font-medium">Language</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                  {user.language}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-500 font-medium">Status</span>
                <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-600 dark:text-emerald-400">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-slate-50/50 dark:bg-slate-900/50">
            <CardContent className="p-6">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Verification Status</h3>
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                  <Save className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Verified Member</p>
                  <p className="text-xs text-slate-500">Identity confirmed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Detailed Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Manage your primary identity details</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="rounded-xl h-12 border-slate-200 focus:ring-teal-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-xl h-12 border-slate-200 focus:ring-teal-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-xl h-12 border-slate-200 focus:ring-teal-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{user.fullName}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{user.phone}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{user.email || "—"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Primary Role</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 capitalize">{user.userType}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm pb-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">Changed your password recently? Keep your account secure.</p>
                <Button variant="outline" className="w-full rounded-xl py-6 font-semibold border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900">
                  Change Password
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm pb-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-red-600">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">Permanently delete your account and all associated data.</p>
                <Button variant="ghost" className="w-full rounded-xl py-6 font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20">
                  Deactivate Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

