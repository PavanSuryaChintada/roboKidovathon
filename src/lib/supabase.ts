import { createClient } from '@supabase/supabase-js';
import type { RegistrationFormData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function registerStudent(formData: RegistrationFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Check if real credentials exist
    if (supabaseUrl.includes('placeholder')) {
      console.info('Supabase running in mock/demo mode. Form submission data:', formData);
      // Simulate network latency for mock submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        success: true,
        message: 'Registration received successfully (Demo Mode)! We will contact your email shortly.',
      };
    }

    const { error } = await supabase.from('registrations').insert([
      {
        student_name: formData.studentName,
        parent_email: formData.parentEmail,
        parent_phone: formData.parentPhone || null,
        age_category: formData.ageCategory,
        school_name: formData.schoolName,
        city: formData.city,
        track_interest: formData.trackInterest,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase registration error:', error);
      return {
        success: false,
        message: error.message || 'Failed to submit registration. Please try again.',
      };
    }

    return {
      success: true,
      message: 'Registration completed successfully! Check your email for event details.',
    };
  } catch (err) {
    console.error('Registration exception:', err);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
