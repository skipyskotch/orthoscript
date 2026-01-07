
import { BodyRegion, RegionId } from './types';

export const BODY_REGIONS: Record<string, BodyRegion> = {
  [RegionId.HeadNeck]: {
    id: RegionId.HeadNeck,
    label: 'Head & Neck',
    description: 'Stabilization and support for cervical spine injuries and post-operative care.',
    products: [
      { id: 'c1', name: 'Miami J Advanced Collar', description: 'Advanced cervical spine immobilization with adjustable height.', category: 'Cervical', imageUrl: 'https://picsum.photos/seed/collar1/400/300' },
      { id: 'c2', name: 'Vista MultiPost Collar', description: 'Padded support for long-term wear and skin protection.', category: 'Cervical', imageUrl: 'https://picsum.photos/seed/collar2/400/300' }
    ]
  },
  [RegionId.Shoulder]: {
    id: RegionId.Shoulder,
    label: 'Shoulder',
    description: 'Immobilizers and functional braces for rotator cuff repairs and instability.',
    products: [
      { id: 's1', name: 'UltraSling IV', description: 'Post-operative shoulder immobilization with 15° abduction.', category: 'Sling', imageUrl: 'https://picsum.photos/seed/shoulder1/400/300' },
      { id: 's2', name: 'Shoulder Abduction Pillow', description: 'Comfortable support for major shoulder reconstructive procedures.', category: 'Sling', imageUrl: 'https://picsum.photos/seed/shoulder2/400/300' }
    ]
  },
  [RegionId.Elbow]: {
    id: RegionId.Elbow,
    label: 'Elbow',
    description: 'Range of motion control and protection for ligament repairs and fractures.',
    products: [
      { id: 'e1', name: 'Hinged Elbow ROM Brace', description: 'Precise range of motion control for elbow rehab.', category: 'Hinged', imageUrl: 'https://picsum.photos/seed/elbow1/400/300' },
      { id: 'e2', name: 'Tennis Elbow Strap', description: 'Targeted compression for epicondylitis relief.', category: 'Support', imageUrl: 'https://picsum.photos/seed/elbow2/400/300' }
    ]
  },
  [RegionId.WristHand]: {
    id: RegionId.WristHand,
    label: 'Wrist & Hand',
    description: 'Splints and braces for carpal tunnel, sprains, and thumb injuries.',
    products: [
      { id: 'w1', name: 'Carpal Tunnel Night Splint', description: 'Neutral wrist positioning for symptom relief during sleep.', category: 'Splint', imageUrl: 'https://picsum.photos/seed/wrist1/400/300' },
      { id: 'w2', name: 'Thumb Spica Brace', description: 'Rigid immobilization for CMC and MP joints.', category: 'Brace', imageUrl: 'https://picsum.photos/seed/wrist2/400/300' }
    ]
  },
  [RegionId.Spine]: {
    id: RegionId.Spine,
    label: 'Spine',
    description: 'Lumbosacral and Thoracolumbosacral supports for chronic pain and surgery.',
    products: [
      { id: 'sp1', name: 'LSO Back Brace', description: 'Lumbosacral orthosis for mechanical back pain and post-op.', category: 'LSO', imageUrl: 'https://picsum.photos/seed/spine1/400/300' },
      { id: 'sp2', name: 'TLSO Posture Support', description: 'Thoracic stabilization for compression fractures.', category: 'TLSO', imageUrl: 'https://picsum.photos/seed/spine2/400/300' }
    ]
  },
  [RegionId.Hip]: {
    id: RegionId.Hip,
    label: 'Hip',
    description: 'Post-operative abduction and stabilization systems.',
    products: [
      { id: 'h1', name: 'Hip Abduction System', description: 'Provides ROM control and stabilization after hip replacement.', category: 'Brace', imageUrl: 'https://picsum.photos/seed/hip1/400/300' },
      { id: 'h2', name: 'Groin & Hip Support', description: 'Compression for soft tissue injuries and strains.', category: 'Compression', imageUrl: 'https://picsum.photos/seed/hip2/400/300' }
    ]
  },
  [RegionId.Knee]: {
    id: RegionId.Knee,
    label: 'Knee',
    description: 'High-performance ACL, OA, and post-operative ROM knee bracing.',
    products: [
      { id: 'k1', name: 'OA Unloader Brace', description: 'Shifts pressure from damaged joint compartments to relieve pain.', category: 'OA', imageUrl: 'https://picsum.photos/seed/knee1/400/300' },
      { id: 'k2', name: 'ACL Functional Brace', description: 'Professional grade protection for ligament instability.', category: 'Ligament', imageUrl: 'https://picsum.photos/seed/knee2/400/300' }
    ]
  },
  [RegionId.AnkleFoot]: {
    id: RegionId.AnkleFoot,
    label: 'Ankle & Foot',
    description: 'Walking boots, stirrups, and stabilizers for foot and ankle trauma.',
    products: [
      { id: 'af1', name: 'Pneumatic CAM Boot', description: 'Adjustable air-cell system for stable fractures and post-op.', category: 'Boot', imageUrl: 'https://picsum.photos/seed/foot1/400/300' },
      { id: 'af2', name: 'Active Ankle Stabilizer', description: 'Rigid support for chronic ankle instability and sports.', category: 'Brace', imageUrl: 'https://picsum.photos/seed/foot2/400/300' }
    ]
  }
};
