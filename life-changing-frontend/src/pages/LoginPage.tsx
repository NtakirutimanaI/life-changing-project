import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/auth-context';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { UserType } from '../lib/types';
import { Eye, EyeOff, Settings, User, Heart, ArrowLeft } from 'lucide-react';

export function LoginPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { login, isLoading, isAuthenticated, user } = useAuth();

    // Handle query params from both standard URL (legacy links) and HashRouter
    const [role, setRole] = useState<UserType>(UserType.ADMIN);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [accessType, setAccessType] = useState('login');

    useEffect(() => {
        // Try React Router params first
        let r = searchParams.get('role');

        // Fallback to window.location.search (for standard ?role=admin links)
        if (!r) {
            const urlParams = new URLSearchParams(window.location.search);
            r = urlParams.get('role');
        }

        if (r) {
            if (r === 'beneficiary') setRole(UserType.BENEFICIARY);
            else if (r === 'donor') setRole(UserType.DONOR);
            else setRole(UserType.ADMIN);
        }
    }, [searchParams]);

    useEffect(() => {
        if (isAuthenticated && user) {
            if (user.userType === UserType.ADMIN) navigate('/admin');
            else if (user.userType === UserType.BENEFICIARY) navigate('/beneficiary');
            else if (user.userType === UserType.DONOR) navigate('/donor');
        }
    }, [isAuthenticated, user, navigate]);

    // Pre-fill for demo
    useEffect(() => {
        if (role === UserType.ADMIN) {
            setEmail('admin@lceo.org');
            setPassword('admin123'); // Visual only
        } else if (role === UserType.BENEFICIARY) {
            setEmail('ben@lceo.org');
            setPassword('ben123');
        } else if (role === UserType.DONOR) {
            setEmail('donor@lceo.org');
            setPassword('donor123');
        }
    }, [role]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, role);
        } catch (err) {
            setError('Invalid credentials. Try generic demo accounts.');
        }
    };

    const getRoleName = () => {
        switch (role) {
            case UserType.BENEFICIARY: return 'Beneficiary Login';
            case UserType.DONOR: return 'Donor Portal Login';
            default: return 'Admin Access';
        }
    };

    return (
        <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container">
                <div className="login-container text-center" style={{ maxWidth: '450px', margin: '0 auto', padding: '40px', background: '#fff', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                    <a href="/index.html"><img src="/images/logo.png" alt="LCEO Logo" style={{ height: '60px', marginBottom: '20px' }} /></a>
                    <div className="login-tabs d-flex justify-content-center mb-4" style={{ borderBottom: '1px solid #eee' }}>
                        <button
                            className={`btn btn-link pb-3 px-4 ${accessType === 'login' ? 'active' : 'text-muted'}`}
                            style={{
                                textDecoration: 'none',
                                borderBottom: accessType === 'login' ? '2px solid var(--primary)' : 'none',
                                color: accessType === 'login' ? 'var(--primary)' : '#6c757d',
                                fontWeight: 'bold'
                            }}
                            onClick={() => setAccessType('login')}
                        >
                            Login
                        </button>
                        <button
                            className={`btn btn-link pb-3 px-4 ${accessType === 'demo' ? 'active' : 'text-muted'}`}
                            style={{
                                textDecoration: 'none',
                                borderBottom: accessType === 'demo' ? '2px solid var(--primary)' : 'none',
                                color: accessType === 'demo' ? 'var(--primary)' : '#6c757d',

                                fontWeight: 'bold'
                            }}
                            onClick={() => setAccessType('demo')}
                        >
                            Demo Access
                        </button>
                    </div>

                    {accessType === 'login' ? (
                        <>
                            <div className="role-badge" style={{ display: 'inline-block', padding: '5px 15px', background: 'var(--accent)', borderRadius: '20px', fontSize: '12px', marginBottom: '20px', fontWeight: 600, color: 'var(--primary)' }}>
                                {getRoleName()}
                            </div>
                            <h2 className="mb-4">Welcome Back</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group text-left mb-3">
                                    <label className="d-block text-left mb-2 text-muted small font-weight-bold">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="admin@lceo.org"
                                        required
                                        style={{ height: '52px', background: '#f8f9fa', border: '1px solid #eee', borderRadius: '5px', width: '100%' }}
                                    />
                                </div>
                                <div className="form-group text-left mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <label className="mb-0 text-muted small font-weight-bold">Password</label>
                                        <a href="#" className="small text-muted" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="********"
                                            required
                                            style={{ height: '52px', background: '#f8f9fa', border: '1px solid #eee', borderRadius: '5px', width: '100%', paddingRight: '45px' }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{
                                                position: 'absolute',
                                                right: '15px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: '#6c757d',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                {error && <div className="alert alert-danger mb-3 p-2 bg-danger text-white rounded">{error}</div>}
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mb-3 btn-login-custom"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Signing In...' : 'Sign In'}
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-block mb-4"
                                    style={{ padding: '12px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                >
                                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" alt="Google" />
                                    <span>Sign in with Google</span>
                                </button>

                                <div className="text-center mb-3">
                                    <span className="text-muted">Don't have an account? </span>
                                    <a href="#" className="font-weight-bold" style={{ color: 'var(--primary)' }} onClick={(e) => e.preventDefault()}>Create account</a>
                                </div>

                                <div className="text-center small text-muted px-4" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                                    By continuing, you agree to our <a href="#" className="text-muted" style={{ textDecoration: 'underline' }}>Terms of Service</a> and <a href="#" className="text-muted" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <h4 className="mb-4 font-weight-bold" style={{ color: 'var(--sidebar)' }}>Select Role to Demo</h4>
                            <p className="text-muted mb-4 small">Experience the platform with pre-configured accounts.</p>

                            <button
                                className="btn btn-outline-primary btn-block mb-3 text-left d-flex align-items-center p-3"
                                onClick={() => login('admin@lceo.org', UserType.ADMIN)}
                            >
                                <div className="bg-light rounded-circle p-2 mr-3 text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <Settings size={20} />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="font-weight-bold" style={{ color: 'var(--sidebar)' }}>Admin Dashboard</div>
                                    <small className="text-muted">Manage users, content & reports</small>
                                </div>
                            </button>

                            <button
                                className="btn btn-outline-primary btn-block mb-3 text-left d-flex align-items-center p-3"
                                onClick={() => login('ben@lceo.org', UserType.BENEFICIARY)}
                            >
                                <div className="bg-light rounded-circle p-2 mr-3 text-success d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <User size={20} />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="font-weight-bold" style={{ color: 'var(--sidebar)' }}>Beneficiary Portal</div>
                                    <small className="text-muted">View progress, tasks & business</small>
                                </div>
                            </button>

                            <button
                                className="btn btn-outline-primary btn-block mb-3 text-left d-flex align-items-center p-3"
                                onClick={() => login('donor@lceo.org', UserType.DONOR)}
                            >
                                <div className="bg-light rounded-circle p-2 mr-3 text-info d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <Heart size={20} />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="font-weight-bold" style={{ color: 'var(--sidebar)' }}>Donor Dashboard</div>
                                    <small className="text-muted">Track donations & impact</small>
                                </div>
                            </button>
                        </>
                    )}
                    <p className="mt-4">
                        <a href="/" className="text-muted small d-inline-flex align-items-center">
                            <ArrowLeft size={14} className="mr-1" /> Back to website
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
