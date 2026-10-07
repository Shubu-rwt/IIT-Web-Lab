//******************************************************************************************************************************** */
const projects = [
  {
    "id": 1,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Developing a system that can detect the hold of bowel movement especially in autistic kids",
    "fundingAgency": "Neuroaid Research Foundation (NRF), New Delhi",
    "collaborator": null,
    "budget": "INR 1600000/-",
    "description": ""
  },
  {
    "id": 2,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Collaborative research project between Translational Research Hiroshima University and Centre for Biomedical Engineering, IIT Delhi",
    "fundingAgency": "IRD, Hiroshima University",
    "collaborator": "Hiroshima University",
    "budget": "INR 23,75,010",
    "description": ""
  },
  {
    "id": 3,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Development and Validation of Mobile-based VPK Determination",
    "fundingAgency": "LYBL Pvt. Limited",
    "collaborator": null,
    "budget": "INR 14,00,000",
    "description": ""
  },
  {
    "id": 4,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Development and Validation of Robotic Probe Holder Device for Ultrasound-guided Central Venous Cannulation",
    "fundingAgency": "Department of Science and Technology (DST), Government of India",
    "collaborator": null,
    "budget": "INR 37,96,058",
    "description": ""
  },
  {
    "id": 5,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Centre of Excellence (CoE) on Neurosurgery Medical Devices",
    "fundingAgency": "Indian Council of Medical Research (ICMR), Government of India",
    "collaborator": null,
    "budget": "INR 10.00 Crores (Total), INR 3.00 Crores (IIT Delhi Share)",
    "description": ""
  },
  {
    "id": 6,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Expansion and Scale-up of MedTech Innovation Training Programme: School of International Biodesign (SiB) Phase-V (BT/PR42130/BIO/144/7/2021)",
    "fundingAgency": "Department of Biotechnology (DBT), Government of India",
    "collaborator": null,
    "budget": "INR 23.0367 Crores (Total), INR 3.5 Crores (IIT Delhi Share)",
    "description": ""
  },
  {
    "id": 7,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Investigating Neural Correlates of Humming Bee Sound During the Bhramari Pranayama",
    "fundingAgency": "AIIA-IITD MFIRP Scheme",
    "collaborator": "Prof. Medha Kulkarni (All India Institute of Ayurveda, Delhi)",
    "budget": "INR 10,00,000",
    "description": ""
  },
  {
    "id": 8,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Combined Neurological and Functional Assessments for the Prediction and Appreciation of Individualized Recovery Profiles: An International Study Benchmarking Clinical Outcomes in Acute Spinal Cord Injury",
    "fundingAgency": "Department of Biotechnology (DBT), Government of India",
    "collaborator": "University of Zurich, Switzerland; Indian Spinal Injury Centre, New Delhi",
    "budget": "INR 43,22,520",
    "description": ""
  },
  {
    "id": 9,
    "category": "As PI",
    "status": "Ongoing",
    "title": "Development of Robotic Platform with Real-Time Perturbations to Assess Neuromuscular Response in Virtual Reality (VR)",
    "fundingAgency": "IRD, IIT Delhi",
    "collaborator": null,
    "budget": "INR 10,00,000",
    "description": ""
  },
  {
    "id": 10,
    "category": "As PI",
    "status": "Completed",
    "title": "Wearable Electronics for Swallow-graphy in Stroke Patients",
    "fundingAgency": "AIIMS-IITD MFIRP Scheme",
    "collaborator": "Prof. Awadh Pandit (Neurology, All India Institute of Medical Sciences, New Delhi)",
    "budget": "INR 10,00,000",
    "description": ""
  },
  {
    "id": 11,
    "category": "As PI",
    "status": "Completed",
    "title": "A Wearable System for Quantitative Assessment and Recovery Prediction During Gait Restoration in Parkinson’s and Cerebral Ataxia Patients",
    "fundingAgency": "Department of Science and Technology (DST), Government of India",
    "collaborator": null,
    "budget": "INR 54,06,630",
    "description": ""
  },
  {
    "id": 12,
    "category": "As PI",
    "status": "Completed",
    "title": "Synergy Based Adaptive Prosthesis for Transfemoral Amputee",
    "fundingAgency": "Indian Council of Medical Research (ICMR), Government of India",
    "collaborator": null,
    "budget": "INR 36,71,696",
    "description": ""
  },
  {
    "id": 13,
    "category": "As PI",
    "status": "Completed",
    "title": "An Artificial Feedback System for Improved Man–Machine Interface in Lower Limb Prosthesis",
    "fundingAgency": "Planning Unit, IIT Delhi",
    "collaborator": null,
    "budget": "INR 20,00,000",
    "description": ""
  },
  {
    "id": 14,
    "category": "As PI",
    "status": "Completed",
    "title": "Intention Detection of Locomotion Transitions Using Neuromuscular and Inertial Inputs",
    "fundingAgency": "Industrial Research Development (IRD) Unit, IIT Delhi",
    "collaborator": null,
    "budget": "INR 1,00,000",
    "description": ""
  },
  {
    "id": 15,
    "category": "As PI",
    "status": "Completed",
    "title": "A Data-Driven Musculoskeletal Model for Lower Limb Injury Investigation",
    "fundingAgency": "Faculty Interdisciplinary Research Proposal (FIRP) Scheme, Industrial Research Development (IRD) Unit, IIT Delhi",
    "collaborator": null,
    "budget": "INR 10,00,000",
    "description": ""
  },
  {
    "id": 16,
    "category": "As PI",
    "status": "Completed",
    "title": "Electroencephalogram Signal Analysis During Locomotion in Different Terrains and the Transitions: A Neurophysiological Study",
    "fundingAgency": "Department of Science and Technology (DST), Government of India",
    "collaborator": null,
    "budget": "INR 41,76,000",
    "description": ""
  },
  {
    "id": 17,
    "category": "As PI",
    "status": "Completed",
    "title": "A Real-Time Biomechanical Monitoring System for Fall Assessment in Elderly Population",
    "fundingAgency": "Discover and Learn (1-2-3-4) Scheme, Industrial Research Development (IRD) Unit, IIT Delhi",
    "collaborator": null,
    "budget": "INR 4,00,000",
    "description": ""
  },
  {
    "id": 18,
    "category": "As Co-PI",
    "status": "Ongoing",
    "title": "DAPHNE: Delhi Air Pollution Health and Effects",
    "fundingAgency": "Department of Biotechnology (DBT), Government of India",
    "collaborator": null,
    "budget": "INR 99,36,000",
    "description": ""
  },
  {
    "id": 19,
    "category": "As Co-PI",
    "status": "Ongoing",
    "title": "Ag Nanorods Based Flexible Wearable Dry Electrodes for Long-Term EEG Monitoring",
    "fundingAgency": "IRD, IIT Delhi",
    "collaborator": null,
    "budget": "INR 10,00,000",
    "description": ""
  }
];

export default projects;