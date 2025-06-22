
-- Seed data for development and testing
-- Insert admin settings
INSERT INTO "admin_settings" ("id", "key", "value", "description") VALUES
  (gen_random_uuid()::text, 'vote_threshold_default', '10', 'Default vote threshold for topic approval'),
  (gen_random_uuid()::text, 'research_deadline_days', '15', 'Days from approval to research deadline'),
  (gen_random_uuid()::text, 'max_topics_per_user', '5', 'Maximum topics a user can propose'),
  (gen_random_uuid()::text, 'platform_name', 'Spark Platform', 'Name of the platform'),
  (gen_random_uuid()::text, 'contact_email', 'admin@spark.ideanest.net', 'Contact email for support');

-- Insert sample admin user (password: admin123)
INSERT INTO "users" ("id", "email", "username", "name", "password", "profileType", "industry", "country", "role") VALUES
  (gen_random_uuid()::text, 'admin@spark.ideanest.net', 'admin', 'Platform Administrator', '$2b$10$rQZ8kHWKQOuXlY5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5', 'BUSINESS_ANALYST', 'Technology', 'United States', 'admin');

-- Insert sample users for testing
INSERT INTO "users" ("id", "email", "username", "name", "password", "profileType", "industry", "country") VALUES
  (gen_random_uuid()::text, 'entrepreneur@example.com', 'entrepreneur1', 'John Entrepreneur', '$2b$10$rQZ8kHWKQOuXlY5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5', 'ENTREPRENEUR', 'Technology', 'United States'),
  (gen_random_uuid()::text, 'investor@example.com', 'investor1', 'Jane Investor', '$2b$10$rQZ8kHWKQOuXlY5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5', 'INVESTOR', 'Finance', 'United Kingdom'),
  (gen_random_uuid()::text, 'pm@example.com', 'productmanager1', 'Mike Product Manager', '$2b$10$rQZ8kHWKQOuXlY5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5qJ9X9/.K5YvJ5', 'PRODUCT_MANAGER', 'Technology', 'Canada');
