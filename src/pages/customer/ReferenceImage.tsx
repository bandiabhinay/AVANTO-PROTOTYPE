import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Camera, Image as ImageIcon, X, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReferenceImage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const navigate = useNavigate();

  // Mock handler for simulating image selection
  const handleSelectImage = () => {
    setImagePreview('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80');
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const handleContinue = () => {
    if (imagePreview) {
      navigate('/ai-processing', { state: { image: imagePreview } });
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 max-w-md mx-auto flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-8 flex-1 flex flex-col"
      >
        <h1 className="text-3xl font-bold text-[#172033] mb-2">Show Us the Style</h1>
        <p className="text-[#667085] text-sm mb-8">
          Upload a reference image to help us find similar approved products.
        </p>

        <AnimatePresence mode="wait">
          {!imagePreview ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              {/* Upload Area */}
              <div 
                className="flex-1 border-2 border-dashed border-[#2563EB]/30 bg-[#F7F8FC] rounded-3xl flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-blue-50/50 transition-colors"
                onClick={handleSelectImage}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2563EB] shadow-sm mb-4">
                  <Upload className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-[#172033] mb-1">Tap to upload</h3>
                <p className="text-sm text-[#667085]">or drag and drop here</p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button 
                  onClick={handleSelectImage}
                  className="flex flex-col items-center justify-center gap-3 py-6 bg-white border border-gray-200 rounded-2xl hover:border-[#2563EB] hover:bg-blue-50/30 transition-colors"
                >
                  <Camera className="w-6 h-6 text-[#172033]" />
                  <span className="text-sm font-medium text-[#172033]">Camera</span>
                </button>
                <button 
                  onClick={handleSelectImage}
                  className="flex flex-col items-center justify-center gap-3 py-6 bg-white border border-gray-200 rounded-2xl hover:border-[#2563EB] hover:bg-blue-50/30 transition-colors"
                >
                  <ImageIcon className="w-6 h-6 text-[#172033]" />
                  <span className="text-sm font-medium text-[#172033]">Gallery</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col"
            >
              <div className="relative flex-1 bg-gray-100 rounded-3xl overflow-hidden shadow-inner">
                <img 
                  src={imagePreview} 
                  alt="Reference" 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur text-[#172033] rounded-full shadow-md hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Footer Area */}
        <div className="mt-8">
          <div className="flex items-start gap-2 mb-6 p-4 bg-[#F7F8FC] rounded-xl border border-gray-100">
            <Shield className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <p className="text-xs text-[#667085] leading-relaxed">
              Your image is used only for finding similar products. We do not identify people or store personal details.
            </p>
          </div>

          <button
            onClick={handleContinue}
            disabled={!imagePreview}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${
              imagePreview 
                ? 'bg-[#2563EB] text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
