// app/dashboard/settings/page.tsx
'use client';

import { useState } from "react";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Mail, 
  User, 
  Lock, 
  Globe, 
  Palette,
  Save,
  Eye,
  EyeOff,
  CheckCircle2,
  Zap,
  Upload,
  Trash2,
  HelpCircle,
  Link as LinkIcon,
  Smartphone,
  Monitor,
  Moon,
  Sun
} from "lucide-react";
import { toast, Toaster } from 'sonner';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'email' | 'security' | 'appearance'>('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex@example.com',
    organization: 'Tech Innovators Inc.',
    bio: 'Passionate hackathon organizer with 5+ years experience',
    website: 'https://alexjohnson.dev',
    phone: '+1 (555) 123-4567'
  });

  const handleSave = () => {
    toast.success(
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4" />
        Settings saved successfully!
      </div>
    );
  };

  const handleReset = () => {
    setProfileData({
      firstName: 'Alex',
      lastName: 'Johnson',
      email: 'alex@example.com',
      organization: 'Tech Innovators Inc.',
      bio: 'Passionate hackathon organizer with 5+ years experience',
      website: 'https://alexjohnson.dev',
      phone: '+1 (555) 123-4567'
    });
    setTheme('system');
    setTwoFactorEnabled(false);
    toast.info("All settings have been reset");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`Profile picture updated: ${file.name}`);
    }
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      toast.error("Account deletion initiated. Check your email for confirmation.");
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="h-4 w-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-4 w-4" /> },
    { id: 'email', label: 'Email Templates', icon: <Mail className="h-4 w-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="h-4 w-4" /> },
  ];

  const notificationSettings = [
    { id: 'email', label: 'Email Notifications', description: 'Receive email updates about your hackathons', enabled: true },
    { id: 'applications', label: 'New Applications', description: 'Get notified when new participants apply', enabled: true },
    { id: 'submissions', label: 'Submission Updates', description: 'Alerts when teams submit their projects', enabled: true },
    { id: 'food', label: 'Food Distribution', description: 'Notifications about meal distribution status', enabled: false },
    { id: 'judging', label: 'Judging Updates', description: 'Updates on judging progress and results', enabled: true },
    { id: 'emergency', label: 'Emergency Alerts', description: 'Critical system notifications', enabled: true },
  ];

  const emailTemplates = [
    { id: 'welcome', label: 'Welcome Email', subject: 'Welcome to [Hackathon Name]!' },
    { id: 'acceptance', label: 'Acceptance Email', subject: 'Congratulations! You have been accepted' },
    { id: 'reminder', label: 'Reminder Email', subject: 'Don\'t forget - [Hackathon Name] starts soon!' },
    { id: 'schedule', label: 'Schedule Update', subject: 'Important: Updated Hackathon Schedule' },
    { id: 'results', label: 'Results Announcement', subject: '[Hackathon Name] Results Are In!' },
  ];

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                    <SettingsIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      Settings
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      Manage your hackathon organizer preferences
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors text-sm font-medium"
                  >
                    Reset Defaults
                  </button>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    <Save className="h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Zap className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Updated</p>
                      <p className="font-medium">2 hours ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Sessions</p>
                      <p className="font-medium">3 devices</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Bell className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Notifications</p>
                      <p className="font-medium">4 enabled</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Shield className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Security Score</p>
                      <p className="font-medium">92/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar Navigation */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-2">
                  <nav className="space-y-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as "profile" | "notifications" | "email" | "security" | "appearance")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-l-4 border-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                      >
                        {tab.icon}
                        {tab.label}
                        {tab.id === 'profile' && activeTab === 'profile' && (
                          <div className="ml-auto h-2 w-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-6 p-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HelpCircle className="h-4 w-4" />
                      <span>Need help?</span>
                    </div>
                    <button 
                      onClick={() => toast.info("Opening help documentation...")}
                      className="mt-2 w-full text-sm text-primary hover:underline"
                    >
                      View documentation
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                {/* Profile Settings */}
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">Profile Settings</h2>
                          <p className="text-sm text-muted-foreground">
                            Update your personal information
                          </p>
                        </div>
                      </div>
                      
                      {/* Profile Picture */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 p-4 rounded-xl bg-accent/10">
                        <div className="relative">
                          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                            {profileData.firstName[0]}{profileData.lastName[0]}
                          </div>
                          <label className="absolute -bottom-2 -right-2 p-2 bg-primary rounded-full cursor-pointer hover:bg-primary/90 transition-colors">
                            <Upload className="h-4 w-4 text-white" />
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleFileUpload}
                            />
                          </label>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">Profile Picture</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Upload a new photo. Recommended size: 256x256px
                          </p>
                          <button
                            onClick={() => toast.info("Removing profile picture...")}
                            className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove photo
                          </button>
                        </div>
                      </div>

                      {/* Form Grid */}
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">First Name</label>
                            <input
                              type="text"
                              value={profileData.firstName}
                              onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                              className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name</label>
                            <input
                              type="text"
                              value={profileData.lastName}
                              onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                              className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input
                              type="email"
                              value={profileData.email}
                              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                              className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <input
                              type="tel"
                              value={profileData.phone}
                              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                              className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Organization</label>
                          <input
                            type="text"
                            value={profileData.organization}
                            onChange={(e) => setProfileData({...profileData, organization: e.target.value})}
                            className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Website</label>
                          <div className="relative">
                            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                              type="url"
                              value={profileData.website}
                              onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                              className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Bio</label>
                          <textarea
                            value={profileData.bio}
                            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                          />
                          <p className="text-xs text-muted-foreground">
                            {profileData.bio.length}/200 characters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notification Settings */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                          <Bell className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">Notification Preferences</h2>
                          <p className="text-sm text-muted-foreground">
                            Choose what notifications you receive
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {notificationSettings.map((setting) => (
                          <div
                            key={setting.id}
                            className="flex items-center justify-between p-4 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors"
                          >
                            <div className="space-y-1">
                              <label className="font-medium">{setting.label}</label>
                              <p className="text-sm text-muted-foreground">
                                {setting.description}
                              </p>
                            </div>
                            <button
                              onClick={() => toast.success(`${setting.label} ${setting.enabled ? 'disabled' : 'enabled'}`)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                setting.enabled
                                  ? 'bg-gradient-to-r from-primary to-purple-600'
                                  : 'bg-border'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  setting.enabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Methods */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <h3 className="font-medium mb-4">Delivery Methods</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {[
                            { icon: <Mail className="h-4 w-4" />, label: 'Email', enabled: true },
                            { icon: <Smartphone className="h-4 w-4" />, label: 'Push', enabled: true },
                            { icon: <Bell className="h-4 w-4" />, label: 'In-App', enabled: true },
                          ].map((method) => (
                            <div key={method.label} className="p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  {method.icon}
                                </div>
                                <span className="font-medium">{method.label}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Receive {method.label.toLowerCase()} notifications
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Email Templates */}
                {activeTab === 'email' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">Email Templates</h2>
                          <p className="text-sm text-muted-foreground">
                            Customize automated emails for your hackathons
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {emailTemplates.map((template) => (
                          <div key={template.id} className="p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-medium mb-1">{template.label}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Sent to participants when triggered
                                </p>
                              </div>
                              <button
                                onClick={() => toast.info(`Editing ${template.label} template`)}
                                className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                              >
                                Edit Template
                              </button>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm text-muted-foreground">Subject Line</label>
                              <input
                                type="text"
                                defaultValue={template.subject}
                                className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div className="mt-3 flex items-center gap-3 text-sm">
                              <button className="text-primary hover:underline">Preview</button>
                              <button className="text-primary hover:underline">Variables</button>
                              <button className="text-primary hover:underline">Test Send</button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10">
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-primary" />
                          <div className="flex-1">
                            <h4 className="font-medium">Custom Template Builder</h4>
                            <p className="text-sm text-muted-foreground">
                              Create custom email templates with our drag-and-drop editor
                            </p>
                          </div>
                          <button
                            onClick={() => toast.info("Opening template builder...")}
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            Launch Builder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Settings */}
                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">Security Settings</h2>
                          <p className="text-sm text-muted-foreground">
                            Manage your account security and privacy
                          </p>
                        </div>
                      </div>

                      {/* Password Change */}
                      <div className="space-y-6">
                        <div className="p-4 rounded-xl border border-border">
                          <h3 className="font-medium mb-4">Change Password</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <label className="text-sm">Current Password</label>
                              <div className="relative">
                                <input
                                  type={showPassword ? "text" : "password"}
                                  className="w-full pl-4 pr-12 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                  placeholder="Enter current password"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm">New Password</label>
                                <input
                                  type="password"
                                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                  placeholder="Enter new password"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm">Confirm Password</label>
                                <input
                                  type="password"
                                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                  placeholder="Confirm new password"
                                />
                              </div>
                            </div>
                            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                              Update Password
                            </button>
                          </div>
                        </div>

                        {/* Two-Factor Authentication */}
                        <div className="p-4 rounded-xl border border-border">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-medium mb-1">Two-Factor Authentication</h3>
                              <p className="text-sm text-muted-foreground">
                                Add an extra layer of security to your account
                              </p>
                            </div>
                            <button
                              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                twoFactorEnabled
                                  ? 'bg-gradient-to-r from-primary to-purple-600'
                                  : 'bg-border'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                          {twoFactorEnabled && (
                            <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                              <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <div>
                                  <p className="font-medium text-green-500">2FA Enabled</p>
                                  <p className="text-sm text-green-500/80">
                                    Your account is protected with two-factor authentication
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Active Sessions */}
                        <div className="p-4 rounded-xl border border-border">
                          <h3 className="font-medium mb-4">Active Sessions</h3>
                          <div className="space-y-3">
                            {[
                              { device: 'Chrome on macOS', location: 'San Francisco, CA', current: true },
                              { device: 'Safari on iPhone', location: 'New York, NY', current: false },
                              { device: 'Firefox on Windows', location: 'London, UK', current: false },
                            ].map((session, index) => (
                              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/10">
                                <div className="flex items-center gap-3">
                                  <Monitor className="h-4 w-4 text-muted-foreground" />
                                  <div>
                                    <p className="font-medium">{session.device}</p>
                                    <p className="text-sm text-muted-foreground">{session.location}</p>
                                  </div>
                                  {session.current && (
                                    <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">
                                      Current
                                    </span>
                                  )}
                                </div>
                                <button
                                  onClick={() => toast.info(`Logging out ${session.device}`)}
                                  className="text-sm text-red-500 hover:text-red-600"
                                >
                                  Logout
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Delete Account */}
                        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="font-medium text-red-500 mb-2">Delete Account</h3>
                              <p className="text-sm text-red-500/80 mb-4">
                                Once you delete your account, there is no going back. Please be certain.
                              </p>
                              <button
                                onClick={handleDeleteAccount}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                              >
                                Delete Account
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Appearance Settings */}
                {activeTab === 'appearance' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                          <Palette className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">Appearance</h2>
                          <p className="text-sm text-muted-foreground">
                            Customize the look and feel of your dashboard
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Theme Selection */}
                        <div>
                          <h3 className="font-medium mb-4">Theme</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                              { id: 'light', label: 'Light', icon: <Sun className="h-5 w-5" /> },
                              { id: 'dark', label: 'Dark', icon: <Moon className="h-5 w-5" /> },
                              { id: 'system', label: 'System', icon: <Monitor className="h-5 w-5" /> },
                            ].map((themeOption) => (
                              <button
                                key={themeOption.id}
                                onClick={() => {
                                  setTheme(themeOption.id as 'light' | 'dark' | 'system');
                                  toast.success(`Theme changed to ${themeOption.label}`);
                                }}
                                className={`p-4 rounded-xl border transition-all ${
                                  theme === themeOption.id
                                    ? 'border-primary bg-primary/10 ring-2 ring-primary/20'
                                    : 'border-border hover:border-primary/30'
                                }`}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className={`p-2 rounded-lg ${
                                    theme === themeOption.id
                                      ? 'bg-primary text-white'
                                      : 'bg-accent text-muted-foreground'
                                  }`}>
                                    {themeOption.icon}
                                  </div>
                                  <span className="font-medium">{themeOption.label}</span>
                                </div>
                                <p className="text-sm text-muted-foreground text-left">
                                  {themeOption.id === 'system' 
                                    ? 'Match your system preferences'
                                    : `${themeOption.label} theme`
                                  }
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Accent Color */}
                        <div>
                          <h3 className="font-medium mb-4">Accent Color</h3>
                          <div className="flex flex-wrap gap-3">
                            {[
                              { color: 'bg-blue-500', name: 'Blue' },
                              { color: 'bg-purple-500', name: 'Purple' },
                              { color: 'bg-green-500', name: 'Green' },
                              { color: 'bg-pink-500', name: 'Pink' },
                              { color: 'bg-orange-500', name: 'Orange' },
                              { color: 'bg-cyan-500', name: 'Cyan' },
                            ].map((accent) => (
                              <button
                                key={accent.color}
                                onClick={() => toast.info(`Accent color changed to ${accent.name}`)}
                                className="group flex flex-col items-center gap-2"
                              >
                                <div className={`h-10 w-10 ${accent.color} rounded-full ring-2 ring-offset-2 ring-offset-background group-hover:ring-primary transition-all`} />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground">
                                  {accent.name}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Layout Options */}
                        <div>
                          <h3 className="font-medium mb-4">Layout</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                              <div>
                                <p className="font-medium">Sidebar Position</p>
                                <p className="text-sm text-muted-foreground">
                                  Choose where the sidebar appears
                                </p>
                              </div>
                              <select className="px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/20">
                                <option>Left</option>
                                <option>Right</option>
                                <option>Collapsed</option>
                              </select>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                              <div>
                                <p className="font-medium">Density</p>
                                <p className="text-sm text-muted-foreground">
                                  Control spacing and font sizes
                                </p>
                              </div>
                              <select className="px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/20">
                                <option>Comfortable</option>
                                <option>Compact</option>
                                <option>Spacious</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Preview */}
                        <div className="p-4 rounded-xl border border-dashed border-border bg-gradient-to-br from-accent/5 to-accent/10">
                          <h4 className="font-medium mb-3">Preview</h4>
                          <div className="flex items-center gap-4">
                            <div className="flex-1">
                              <div className="h-3 bg-border rounded-full mb-2" />
                              <div className="h-3 bg-border rounded-full mb-2 w-3/4" />
                              <div className="h-3 bg-border rounded-full w-1/2" />
                            </div>
                            <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-primary to-purple-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Add missing AlertCircle icon component
function AlertCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

export default Settings;