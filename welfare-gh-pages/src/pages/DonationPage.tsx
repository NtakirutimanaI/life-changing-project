import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPrograms } from '../lib/mock-data';
import { toast } from 'sonner';
import {
    Check,
    ArrowRight,
    ArrowLeft,
    RefreshCcw,
    Heart,
    Smartphone,
    CreditCard,
    Building2,
    Banknote,
    CheckCircle,
    Info
} from 'lucide-react';

export function DonationPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        program: '',
        type: 'recurring',
        frequency: 'monthly',
        amount: '',
        customAmount: '',
        anonymous: false,
        message: '',
        paymentMethod: '',
        email: '',
        name: '',
    });

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;
    const suggestedAmounts = [25, 50, 100, 250, 500, 1000];

    const handleNext = () => {
        setStep(prev => prev + 1);
        window.scrollTo(0, 0);
    };

    const handleCompleteDonation = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            toast.success('Donation processed successfully! Thank you for your support.');
            handleNext();
        }, 2000);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
        window.scrollTo(0, 0);
    };

    const selectedAmount = parseInt(formData.amount || formData.customAmount || '0');

    return (
        <div className="py-5" style={{ minHeight: '100vh', background: '#f4f7f6' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Progress */}
                        <div className="mb-4">
                            <div className="d-flex justify-content-between mb-2">
                                <small className="font-weight-bold">Step {step} of {totalSteps}</small>
                                <small className="font-weight-bold text-primary">{Math.round(progress)}% Complete</small>
                            </div>
                            <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                                <div className="progress-bar bg-primary" style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}></div>
                            </div>
                        </div>

                        <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
                            <div className="card-body p-4 p-md-5">

                                {/* Step 1: Program */}
                                {step === 1 && (
                                    <div>
                                        <h3 className="font-weight-bold mb-2 text-center">Choose Where to Make an Impact</h3>
                                        <p className="text-muted text-center mb-5">Select a program to support or donate to where needed most</p>

                                        <div className="list-group">
                                            <div
                                                className={`list-group-item list-group-item-action cursor-pointer p-3 mb-3 rounded-lg border-2 ${formData.program === 'general' ? 'border-primary bg-light' : 'border-transparent'}`}
                                                style={{ border: '2px solid transparent' }}
                                                onClick={() => setFormData({ ...formData, program: 'general' })}
                                            >
                                                <div className="d-flex w-100 justify-content-between align-items-center">
                                                    <h5 className="mb-1 font-weight-bold text-primary">Where Needed Most</h5>
                                                    <div className={`rounded-circle d-flex align-items-center justify-content-center ${formData.program === 'general' ? 'bg-primary text-white' : 'bg-light text-muted'}`} style={{ width: '24px', height: '24px' }}>
                                                        {formData.program === 'general' && <Check size={14} />}
                                                    </div>
                                                </div>
                                                <p className="mb-1 text-muted">Allow us to direct your donation to areas of greatest need.</p>
                                            </div>
                                            {mockPrograms.map(p => (
                                                <div
                                                    key={p.id}
                                                    className={`list-group-item list-group-item-action cursor-pointer p-3 mb-3 rounded-lg border-2 ${formData.program === p.id ? 'border-primary bg-light' : 'border-transparent'}`}
                                                    style={{ border: '2px solid transparent' }}
                                                    onClick={() => setFormData({ ...formData, program: p.id })}
                                                >
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <h5 className="mb-1 font-weight-bold text-primary">{p.name.en}</h5>
                                                        <div className={`rounded-circle d-flex align-items-center justify-content-center ${formData.program === p.id ? 'bg-primary text-white' : 'bg-light text-muted'}`} style={{ width: '24px', height: '24px' }}>
                                                            {formData.program === p.id && <Check size={14} />}
                                                        </div>
                                                    </div>
                                                    <p className="mb-1 text-muted">{p.description.en.substring(0, 80)}...</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="text-right mt-4">
                                            <button className="btn btn-primary btn-lg d-inline-flex align-items-center" onClick={handleNext} disabled={!formData.program}>
                                                Continue <ArrowRight size={18} className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Type */}
                                {step === 2 && (
                                    <div>
                                        <h3 className="font-weight-bold mb-2 text-center">Choose Donation Frequency</h3>
                                        <div className="row mt-5">
                                            <div className="col-md-6 mb-3">
                                                <div
                                                    className={`card h-100 cursor-pointer transition-all border-2 ${formData.type === 'recurring' ? 'border-primary bg-light ring-2 ring-primary ring-opacity-20' : ''}`}
                                                    onClick={() => setFormData({ ...formData, type: 'recurring' })}
                                                    style={{ border: formData.type === 'recurring' ? '2px solid #57c1b3' : '1px solid #dee2e6' }}
                                                >
                                                    <div className="card-body text-center p-4">
                                                        <div className="bg-primary-light rounded-circle d-inline-flex p-3 mb-3 text-primary">
                                                            <RefreshCcw size={32} />
                                                        </div>
                                                        <h5 className="font-weight-bold">Monthly Giving</h5>
                                                        <p className="text-muted small">Join our Impact Circle with recurring monthly support.</p>
                                                        <span className="badge badge-success badge-pill py-2 px-3">Recommended</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div
                                                    className={`card h-100 cursor-pointer transition-all border-2 ${formData.type === 'one-time' ? 'border-primary bg-light' : ''}`}
                                                    onClick={() => setFormData({ ...formData, type: 'one-time' })}
                                                    style={{ border: formData.type === 'one-time' ? '2px solid #57c1b3' : '1px solid #dee2e6' }}
                                                >
                                                    <div className="card-body text-center p-4">
                                                        <div className="bg-light rounded-circle d-inline-flex p-3 mb-3 text-muted">
                                                            <Heart size={32} />
                                                        </div>
                                                        <h5 className="font-weight-bold">One-Time Gift</h5>
                                                        <p className="text-muted small">Make a single donation to support our programs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between mt-5">
                                            <button className="btn btn-outline-secondary d-flex align-items-center" onClick={handleBack}>
                                                <ArrowLeft size={18} className="mr-2" /> Back
                                            </button>
                                            <button className="btn btn-primary d-flex align-items-center" onClick={handleNext}>
                                                Continue <ArrowRight size={18} className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Amount */}
                                {step === 3 && (
                                    <div>
                                        <h3 className="font-weight-bold mb-4 text-center">Choose Donation Amount (USD)</h3>
                                        <div className="row">
                                            {suggestedAmounts.map(amt => (
                                                <div className="col-4 mb-3" key={amt}>
                                                    <button
                                                        className={`btn btn-block py-3 font-weight-bold transition-all ${formData.amount === amt.toString() ? 'btn-primary' : 'btn-outline-primary'}`}
                                                        onClick={() => setFormData({ ...formData, amount: amt.toString(), customAmount: '' })}
                                                    >
                                                        ${amt}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="form-group mt-3">
                                            <label className="font-weight-bold text-muted small text-uppercase">Or enter custom amount</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-white border-right-0">$</span>
                                                </div>
                                                <input type="number" className="form-control form-control-lg border-left-0" placeholder="0.00"
                                                    value={formData.customAmount}
                                                    onChange={e => setFormData({ ...formData, customAmount: e.target.value, amount: '' })}
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between mt-5">
                                            <button className="btn btn-outline-secondary d-flex align-items-center" onClick={handleBack}>
                                                <ArrowLeft size={18} className="mr-2" /> Back
                                            </button>
                                            <button className="btn btn-primary d-flex align-items-center" onClick={handleNext} disabled={selectedAmount === 0}>
                                                Continue <ArrowRight size={18} className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Payment */}
                                {step === 4 && (
                                    <div>
                                        <h3 className="font-weight-bold mb-4 text-center">Payment Information</h3>
                                        <div className="alert alert-info border-0 text-center rounded-lg shadow-sm mb-4 d-flex align-items-center justify-content-center py-3">
                                            <Info size={24} className="mr-3 opacity-50" />
                                            <div>
                                                <div className="h4 font-weight-bold mb-0">${selectedAmount}</div>
                                                <div className="small opacity-75 font-weight-bold text-uppercase" style={{ letterSpacing: '1px' }}>{formData.type === 'recurring' ? 'Monthly Donation' : 'One-time Donation'}</div>
                                            </div>
                                        </div>

                                        <div className="form-group mb-4">
                                            <label className="font-weight-bold mb-3 text-muted small text-uppercase">Choose Payment Method</label>
                                            <div className="row">
                                                <div className="col-6 mb-3">
                                                    <div
                                                        className={`card h-100 cursor-pointer text-center py-3 transition-all ${formData.paymentMethod === 'mobile' ? 'border-warning shadow-sm' : ''}`}
                                                        style={{
                                                            border: formData.paymentMethod === 'mobile' ? '2px solid #FFCC00' : '1px solid #dee2e6',
                                                            backgroundColor: formData.paymentMethod === 'mobile' ? '#fffdf5' : '#fff'
                                                        }}
                                                        onClick={() => setFormData({ ...formData, paymentMethod: 'mobile' })}
                                                    >
                                                        <div className="card-body p-2">
                                                            <div className="icon-wrap mb-2" style={{ color: '#FFCC00' }}>
                                                                <Smartphone size={32} />
                                                            </div>
                                                            <h6 className="font-weight-bold mb-0">Mobile Money</h6>
                                                            <small className="text-muted">MTN / Airtel</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <div
                                                        className={`card h-100 cursor-pointer text-center py-3 transition-all ${formData.paymentMethod === 'card' ? 'border-primary shadow-sm' : ''}`}
                                                        style={{
                                                            border: formData.paymentMethod === 'card' ? '2px solid #57c1b3' : '1px solid #dee2e6',
                                                            backgroundColor: formData.paymentMethod === 'card' ? '#f8fbff' : '#fff'
                                                        }}
                                                        onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                                                    >
                                                        <div className="card-body p-2">
                                                            <div className="icon-wrap mb-2 text-primary">
                                                                <CreditCard size={32} />
                                                            </div>
                                                            <h6 className="font-weight-bold mb-0">Credit Card</h6>
                                                            <small className="text-muted">Visa / MasterCard</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <div
                                                        className={`card h-100 cursor-pointer text-center py-3 transition-all ${formData.paymentMethod === 'bank' ? 'border-success shadow-sm' : ''}`}
                                                        style={{
                                                            border: formData.paymentMethod === 'bank' ? '2px solid #28a745' : '1px solid #dee2e6',
                                                            backgroundColor: formData.paymentMethod === 'bank' ? '#f6fff8' : '#fff'
                                                        }}
                                                        onClick={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                                                    >
                                                        <div className="card-body p-2">
                                                            <div className="icon-wrap mb-2 text-success">
                                                                <Building2 size={32} />
                                                            </div>
                                                            <h6 className="font-weight-bold mb-0">Bank Transfer</h6>
                                                            <small className="text-muted">BK / Equity</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <div
                                                        className={`card h-100 cursor-pointer text-center py-3 transition-all ${formData.paymentMethod === 'cash' ? 'border-secondary shadow-sm' : ''}`}
                                                        style={{
                                                            border: formData.paymentMethod === 'cash' ? '2px solid #6c757d' : '1px solid #dee2e6',
                                                            backgroundColor: formData.paymentMethod === 'cash' ? '#f8f9fa' : '#fff'
                                                        }}
                                                        onClick={() => setFormData({ ...formData, paymentMethod: 'cash' })}
                                                    >
                                                        <div className="card-body p-2">
                                                            <div className="icon-wrap mb-2 text-secondary">
                                                                <Banknote size={32} />
                                                            </div>
                                                            <h6 className="font-weight-bold mb-0">Cash</h6>
                                                            <small className="text-muted">In Person</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label className="text-muted small font-weight-bold text-uppercase">Full Name</label>
                                                <input type="text" className="form-control form-control-custom" required
                                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="text-muted small font-weight-bold text-uppercase">Email Address</label>
                                                <input type="email" className="form-control form-control-custom" required
                                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between mt-5">
                                            <button className="btn btn-outline-secondary d-flex align-items-center" onClick={handleBack} disabled={loading}>
                                                <ArrowLeft size={18} className="mr-2" /> Back
                                            </button>
                                            <button className="btn btn-success btn-lg d-flex align-items-center" onClick={handleCompleteDonation} disabled={!formData.paymentMethod || !formData.name || !formData.email || loading}>
                                                {loading ? 'Processing...' : <><CheckCircle size={20} className="mr-2" /> Complete Donation</>}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 5: Success */}
                                {step === 5 && (
                                    <div className="text-center py-5">
                                        <div className="p-4 bg-success-light rounded-circle d-inline-block mb-4 shadow-sm">
                                            <CheckCircle size={64} className="text-success" />
                                        </div>
                                        <h2 className="font-weight-bold mb-3">Thank You!</h2>
                                        <p className="lead text-muted mb-5">Your donation of <strong className="text-dark">${selectedAmount}</strong> will make a lasting impact.</p>

                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-outline-secondary btn-lg mr-3 shadow-sm px-4" onClick={() => window.location.href = '/'}>Return Home</button>
                                            <button className="btn btn-primary btn-lg shadow-sm px-4" onClick={() => navigate('/donor')}>View Dashboard</button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
