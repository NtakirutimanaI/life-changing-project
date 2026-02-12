import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload, Loader2, X, FileText, Image as ImageIcon, File } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { DocumentType } from '@/lib/types';

interface UploadedFile {
  file: File;
  preview?: string;
}

export default function UploadDocumentPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const [formData, setFormData] = useState({
    documentType: '',
    notes: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        toast.error('Only JPEG, PNG, and PDF files are allowed');
        return;
      }

      // Create preview for images
      const fileData: UploadedFile = { file };
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedFile({ file, preview: reader.result as string });
        };
        reader.readAsDataURL(file);
      } else {
        setUploadedFile(fileData);
      }
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!uploadedFile || !formData.documentType) {
      toast.error('Please select a document type and upload a file');
      return;
    }

    setIsLoading(true);

    // Simulate API call (in real app, upload to cloud storage like Cloudinary)
    setTimeout(() => {
      toast.success('Document uploaded successfully!');
      setIsLoading(false);
      navigate('/beneficiary/resources');
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getFileIcon = () => {
    if (!uploadedFile) return File;

    const fileType = uploadedFile.file.type;
    if (fileType.startsWith('image/')) return ImageIcon;
    if (fileType === 'application/pdf') return FileText;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/beneficiary/resources')}
          className="rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Upload Document</h1>
          <p className="text-muted-foreground">
            Upload your personal documents for verification
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="max-w-3xl border-2 border-[#4c9789]/20">
          <CardHeader className="bg-gradient-to-br from-[#4c9789]/5 to-[#eacfa2]/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#4c9789] flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Document Upload</CardTitle>
                <CardDescription>
                  Select document type and upload your file (Max 10MB)
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Document Type */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Document Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="documentType">Document Type *</Label>
                  <Select
                    value={formData.documentType}
                    onValueChange={(value) => handleChange('documentType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={DocumentType.ID_CARD}>National ID Card</SelectItem>
                      <SelectItem value={DocumentType.BIRTH_CERTIFICATE}>Birth Certificate</SelectItem>
                      <SelectItem value={DocumentType.SCHOOL_CERTIFICATE}>School Certificate</SelectItem>
                      <SelectItem value={DocumentType.MEDICAL_REPORT}>Medical Report</SelectItem>
                      <SelectItem value={DocumentType.BUSINESS_LICENSE}>Business License</SelectItem>
                      <SelectItem value={DocumentType.OTHER}>Other Document</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Upload File
                </h3>

                {!uploadedFile ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4c9789] transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      Drop your file here, or{' '}
                      <label htmlFor="file-upload" className="text-[#4c9789] font-medium cursor-pointer hover:underline">
                        browse
                      </label>
                    </p>
                    <p className="text-sm text-gray-500">
                      Supports: JPEG, PNG, PDF (Max 10MB)
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept="image/jpeg,image/png,image/jpg,application/pdf"
                      onChange={handleFileChange}
                    />
                  </div>
                ) : (
                  <Card className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        {uploadedFile.preview ? (
                          <img
                            src={uploadedFile.preview}
                            alt="Preview"
                            className="w-24 h-24 object-cover rounded-lg border"
                          />
                        ) : (
                          <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                            {(() => {
                              const Icon = getFileIcon();
                              return <Icon className="w-10 h-10 text-gray-600" />;
                            })()}
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <p className="font-medium truncate">
                                {uploadedFile.file.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {formatFileSize(uploadedFile.file.size)}
                              </p>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={removeFile}
                              className="flex-shrink-0"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="mt-2">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-[#4c9789] w-full" />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Upload ready</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Notes */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#4c9789] border-b pb-2">
                  Additional Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <textarea
                    id="notes"
                    className="w-full border rounded-md p-2 min-h-[100px]"
                    placeholder="Any additional information about this document..."
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                  />
                </div>
              </div>

              {/* Important Information */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Important Information</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• All documents will be reviewed by our staff within 2-3 business days</li>
                    <li>• Make sure the document is clear and readable</li>
                    <li>• For ID cards, ensure all four corners are visible</li>
                    <li>• You will receive a notification once your document is verified</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/beneficiary/resources')}
                  className="flex-1"
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#4c9789] hover:bg-[#3d7a6e]"
                  disabled={isLoading || !uploadedFile}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Document
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
