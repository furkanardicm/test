'use client';

interface PageHeaderProps {
  coverImage?: string;
}

export default function PageHeader({ coverImage }: PageHeaderProps) {
  return (
    <div className="relative h-[450px] overflow-hidden">
      {/* Cover Image with Overlay */}
      <div className="absolute inset-0">
        {coverImage ? (
          <img 
            src={coverImage} 
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src="/banner.jpg" 
            alt="Termik Santral"
            className="w-full h-full object-cover"
          />
        )}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        </div>
      </div>
    </div>
  );
}

