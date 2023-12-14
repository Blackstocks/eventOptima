from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _

# Custom UserManager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

# Custom User Model
class CustomUser(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = [
        ('Student', 'Student'),
        ('Campus Ambassador', 'Campus Ambassador'),
        ('Admin', 'Admin'),
        ('Startup', 'Startup'),
        ('Professional', 'Professional'),
        ('Contingent', 'Contingent'),
    ]

    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="custom_user_set",  # Changed related_name
        related_query_name="user",
    )


    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    user_type = models.CharField(max_length=255, choices=USER_TYPES)
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="custom_user_set",  # Changed related_name
        related_query_name="user",
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def save(self, *args, **kwargs):
        self.username = self.email
        super(CustomUser, self).save(*args, **kwargs)

    def __str__(self):
        return self.email


class StudentProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='student_profile')
    full_name = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    GENDER_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Others', 'Others'),    # updated
    ('Prefer not say', 'Prefer not say'),
    )
    gender = models.CharField(max_length=255,choices=GENDER_CHOICES, default='Prefer not say', blank=True, null=True)
    college_name = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    STATES = (
    ('Andhra Pradesh', 'Andhra Pradesh'),
    ('Arunachal Pradesh', 'Arunachal Pradesh'),
    ('Assam', 'Assam'),
    ('Bihar', 'Bihar'),
    ('Chhattisgarh', 'Chhattisgarh'),
    ('Goa', 'Goa'),
    ('Gujarat', 'Gujarat'),
    ('Haryana', 'Haryana'),
    ('Himachal Pradesh', 'Himachal Pradesh'),
    ('Jammu and Kashmir', 'Jammu and Kashmir'),
    ('Jharkhand', 'Jharkhand'),
    ('Karnataka', 'Karnataka'),
    ('Kerala', 'Kerala'),
    ('Madhya Pradesh', 'Madhya Pradesh'),
    ('Maharashtra', 'Maharashtra'),
    ('Manipur', 'Manipur'),
    ('Meghalaya', 'Meghalaya'),
    ('Mizoram', 'Mizoram'),
    ('Nagaland', 'Nagaland'),
    ('Odisha', 'Odisha'),
    ('Punjab', 'Punjab'),
    ('Rajasthan', 'Rajasthan'),
    ('Sikkim', 'Sikkim'),
    ('Tamil Nadu', 'Tamil Nadu'),
    ('Telangana', 'Telangana'),
    ('Tripura', 'Tripura'),
    ('Uttarakhand', 'Uttarakhand'),
    ('Uttar Pradesh', 'Uttar Pradesh'),
    ('West Bengal', 'West Bengal'),
    ('Andaman and Nicobar Islands', 'Andaman and Nicobar Islands'),
    ('Chandigarh', 'Chandigarh'),
    ('Dadra and Nagar Haveli', 'Dadra and Nagar Haveli'),
    ('Daman and Diu', 'Daman and Diu'),
    ('Delhi', 'Delhi'),
    ('Lakshadweep', 'Lakshadweep'),
    ('Puducherry', 'Puducherry'),
    )
    state = models.CharField(max_length=255,choices=STATES, blank=True, null=True)
    COUNTRIES = (
    ('Afghanistan', 'Afghanistan'),
    ('Albania', 'Albania'),
    ('Algeria', 'Algeria'),
    ('Andorra', 'Andorra'),
    ('Angola', 'Angola'),
    ('Antigua and Barbuda', 'Antigua and Barbuda'),
    ('Argentina', 'Argentina'),
    ('Armenia', 'Armenia'),
    ('Australia', 'Australia'),
    ('Austria', 'Austria'),
    ('Azerbaijan', 'Azerbaijan'),
    ('Bahamas', 'Bahamas'),
    ('Bahrain', 'Bahrain'),
    ('Bangladesh', 'Bangladesh'),
    ('Barbados', 'Barbados'),
    ('Belarus', 'Belarus'),
    ('Belgium', 'Belgium'),
    ('Belize', 'Belize'),
    ('Benin', 'Benin'),
    ('Bhutan', 'Bhutan'),
    ('Bolivia', 'Bolivia'),
    ('Bosnia and Herzegovina', 'Bosnia and Herzegovina'),
    ('Botswana', 'Botswana'),
    ('Brazil', 'Brazil'),
    ('Brunei', 'Brunei'),
    ('Bulgaria', 'Bulgaria'),
    ('Burkina Faso', 'Burkina Faso'),
    ('Burundi', 'Burundi'),
    ('Cabo Verde', 'Cabo Verde'),
    ('Cambodia', 'Cambodia'),
    ('Cameroon', 'Cameroon'),
    ('Canada', 'Canada'),
    ('Central African Republic', 'Central African Republic'),
    ('Chad', 'Chad'),
    ('Chile', 'Chile'),
    ('China', 'China'),
    ('Colombia', 'Colombia'),
    ('Comoros', 'Comoros'),
    ('Congo', 'Congo'),
    ('Costa Rica', 'Costa Rica'),
    ('Croatia', 'Croatia'),
    ('Cuba', 'Cuba'),
    ('Cyprus', 'Cyprus'),
    ('Czech Republic', 'Czech Republic'),
    ('Denmark', 'Denmark'),
    ('Djibouti', 'Djibouti'),
    ('Dominica', 'Dominica'),
    ('Dominican Republic', 'Dominican Republic'),
    ('East Timor', 'East Timor'),
    ('Ecuador', 'Ecuador'),
    ('Egypt', 'Egypt'),
    ('El Salvador', 'El Salvador'),
    ('Equatorial Guinea', 'Equatorial Guinea'),
    ('Eritrea', 'Eritrea'),
    ('Estonia', 'Estonia'),
    ('Eswatini', 'Eswatini'),
    ('Ethiopia', 'Ethiopia'),
    ('Fiji', 'Fiji'),
    ('Finland', 'Finland'),
    ('France', 'France'),
    ('Gabon', 'Gabon'),
    ('Gambia', 'Gambia'),
    ('Georgia', 'Georgia'),
    ('Germany', 'Germany'),
    ('Ghana', 'Ghana'),
    ('Greece', 'Greece'),
    ('Grenada', 'Grenada'),
    ('Guatemala', 'Guatemala'),
    ('Guinea', 'Guinea'),
    ('Guinea-Bissau', 'Guinea-Bissau'),
    ('Guyana', 'Guyana'),
    ('Haiti', 'Haiti'),
    ('Honduras', 'Honduras'),
    ('Hungary', 'Hungary'),
    ('Iceland', 'Iceland'),
    ('India', 'India'),
    ('Indonesia', 'Indonesia'),
    ('Iran', 'Iran'),
    ('Iraq', 'Iraq'),
    ('Ireland', 'Ireland'),
    ('Israel', 'Israel'),
    ('Italy', 'Italy'),
    ('Jamaica', 'Jamaica'),
    ('Japan', 'Japan'),
    ('Jordan', 'Jordan'),
    ('Kazakhstan', 'Kazakhstan'),
    ('Kenya', 'Kenya'),
    ('Kiribati', 'Kiribati'),
    ('Korea, North', 'Korea, North'),
    ('Korea, South', 'Korea, South'),
    ('Kosovo', 'Kosovo'),
    ('Kuwait', 'Kuwait'),
    ('Kyrgyzstan', 'Kyrgyzstan'),
    ('Laos', 'Laos'),
    ('Latvia', 'Latvia'),
    ('Lebanon', 'Lebanon'),
    ('Lesotho', 'Lesotho'),
    ('Liberia', 'Liberia'),
    ('Libya', 'Libya'),
    ('Liechtenstein', 'Liechtenstein'),
    ('Lithuania', 'Lithuania'),
    ('Luxembourg', 'Luxembourg'),
    ('Madagascar', 'Madagascar'),
    ('Malawi', 'Malawi'),
    ('Malaysia', 'Malaysia'),
    ('Maldives', 'Maldives'),
    ('Mali', 'Mali'),
    ('Malta', 'Malta'),
    ('Marshall Islands', 'Marshall Islands'),
    ('Mauritania', 'Mauritania'),
    ('Mauritius', 'Mauritius'),
    ('Mexico', 'Mexico'),
    ('Micronesia', 'Micronesia'),
    ('Moldova', 'Moldova'),
    ('Monaco', 'Monaco'),
    ('Mongolia', 'Mongolia'),
    ('Montenegro', 'Montenegro'),
    ('Morocco', 'Morocco'),
    ('Mozambique', 'Mozambique'),
    ('Myanmar', 'Myanmar'),
    ('Namibia', 'Namibia'),
    ('Nauru', 'Nauru'),
    ('Nepal', 'Nepal'),
    ('Netherlands', 'Netherlands'),
    ('New Zealand', 'New Zealand'),
    ('Nicaragua', 'Nicaragua'),
    ('Niger', 'Niger'),
    ('Nigeria', 'Nigeria'),
    ('North Macedonia', 'North Macedonia'),
    ('Norway', 'Norway'),
    ('Oman', 'Oman'),
    ('Pakistan', 'Pakistan'),
    ('Palau', 'Palau'),
    ('Panama', 'Panama'),
    ('Papua New Guinea', 'Papua New Guinea'),
    ('Paraguay', 'Paraguay'),
    ('Peru', 'Peru'),
    ('Philippines', 'Philippines'),
    ('Poland', 'Poland'),
    ('Portugal', 'Portugal'),
    ('Qatar', 'Qatar'),
    ('Romania', 'Romania'),
    ('Russia', 'Russia'),
    ('Rwanda', 'Rwanda'),
    ('Saint Kitts and Nevis', 'Saint Kitts and Nevis'),
    ('Saint Lucia', 'Saint Lucia'),
    ('Saint Vincent and the Grenadines', 'Saint Vincent and the Grenadines'),
    ('Samoa', 'Samoa'),
    ('San Marino', 'San Marino'),
    ('Sao Tome and Principe', 'Sao Tome and Principe'),
    ('Saudi Arabia', 'Saudi Arabia'),
    ('Senegal', 'Senegal'),
    ('Serbia', 'Serbia'),
    ('Seychelles', 'Seychelles'),
    ('Sierra Leone', 'Sierra Leone'),
    ('Singapore', 'Singapore'),
    ('Slovakia', 'Slovakia'),
    ('Slovenia', 'Slovenia'),
    ('Solomon Islands', 'Solomon Islands'),
    ('Somalia', 'Somalia'),
    ('South Africa', 'South Africa'),
    ('South Sudan', 'South Sudan'),
    ('Spain', 'Spain'),
    ('Sri Lanka', 'Sri Lanka'),
    ('Sudan', 'Sudan'),
    ('Suriname', 'Suriname'),
    ('Sweden', 'Sweden'),
    ('Switzerland', 'Switzerland'),
    ('Syria', 'Syria'),
    ('Taiwan', 'Taiwan'),
    ('Tajikistan', 'Tajikistan'),
    ('Tanzania', 'Tanzania'),
    ('Thailand', 'Thailand'),
    ('Togo', 'Togo'),
    ('Tonga', 'Tonga'),
    ('Trinidad and Tobago', 'Trinidad and Tobago'),
    ('Tunisia', 'Tunisia'),
    ('Turkey', 'Turkey'),
    ('Turkmenistan', 'Turkmenistan'),
    ('Tuvalu', 'Tuvalu'),
    ('Uganda', 'Uganda'),
    ('Ukraine', 'Ukraine'),
    ('United Arab Emirates', 'United Arab Emirates'),
    ('United Kingdom', 'United Kingdom'),
    ('United States', 'United States'),
    ('Uruguay', 'Uruguay'),
    ('Uzbekistan', 'Uzbekistan'),
    ('Vanuatu', 'Vanuatu'),
    ('Vatican City', 'Vatican City'),
    ('Venezuela', 'Venezuela'),
    ('Vietnam', 'Vietnam'),
    ('Yemen', 'Yemen'),
    ('Zambia', 'Zambia'),
    ('Zimbabwe', 'Zimbabwe'),
    )
    country = models.CharField(max_length=255, default="India", choices=COUNTRIES, blank=True, null=True)
    YEARSTUDY= (
    ('1st Year ','1st Year '),
    ('2nd Year','2nd Year'),
    ('3rd Year','3rd Year'),
    ('4th Year','4th Year'),
    ('5th Year','5th Year'),
    )
    year_of_study = models.CharField(max_length=255,choices=YEARSTUDY, blank=True, null=True)
    PASSINGYEAR = (
    ('2023', '2023'),
    ('2024', '2024'),
    ('2025', '2025'),
    ('2026', '2026'),
    ('2027', '2027'),
    )
    passing_year = models.CharField(max_length=255,choices=PASSINGYEAR, blank=True, null=True)
    want_internship = models.BooleanField(default=False)
    campus_ambassador = models.BooleanField(default=False)
    # referral_code = models.CharField(max_length=255, blank=True, null=True)

    # POST Fields
    have_startup = models.BooleanField(default=False)
    STARTUP_STAGES = (
    ('Idea', 'Idea'),
    ('Concept', 'Concept'),
    ('Prototype', 'Prototype'),
    ('Proof Concept', 'Proof Concept'),
    ('Pilot', 'Pilot'),
    ('Operational(<1year)', 'Operational(<1year)'),
    ('Operational(>1year)', 'Operational(>1year)'),
    ('Other', 'Other'),
    )
    startup_stage = models.CharField(max_length=255,choices=STARTUP_STAGES, blank=True, null=True)
    favourite_startup = models.CharField(max_length=255, blank=True, null=True)
    inspiration = models.CharField(max_length=255, blank=True, null=True)
    skills = models.CharField(max_length=255, blank=True, null=True)
    EXPERTISE = (
    ('Web Development', 'Web Development'),
    ('Android/iOS Development', 'Android/iOS Development'),
    ('Designer', 'Designer'),
    ('IOT', 'IOT'),
    ('Marketing', 'Marketing'),
    ('Operations', 'Operations'),
    ('Product Management', 'Product Management'),
    ('Business Development', 'Business Development'),
    ('Sales', 'Sales'),
    )
    experience_expertise = models.TextField(blank=True,choices=EXPERTISE, null=True)
    linkedin_id = models.URLField(max_length=255, blank=True, null=True)
    interest_choice = models.CharField(max_length=255, blank=True, null=True)
    INDUSTRY_CHOICES = (
    ('Agriculture', 'Agriculture'),
    ('AR/VR', 'AR/VR'),
    ('AI', 'AI'),
    ('Automotive', 'Automotive'),
    ('Aviation', 'Aviation'),
    ('Biotech', 'Biotech'),
    ('Blockchain', 'Blockchain'),
    ('Clean Technology', 'Clean Technology'),
    ('Consulting', 'Consulting'),
    ('Consumer Goods', 'Consumer Goods'),
    ('Cryptocurrency', 'Cryptocurrency'),
    ('Cybersecurity', 'Cybersecurity'),
    ('Design/Graphics', 'Design/Graphics'),
    ('Digital Marketing', 'Digital Marketing'),
    ('e-Commerce', 'e-Commerece'),
    ('Education', 'Education'),
    ('Entertainment/Gaming', 'Entertainment/Gaming'),
    ('Events', 'Events'),
    ('Fashion', 'Fashion'),
    ('Fintech/Finance', 'Fintech/Finance'),
    ('Food/Beverage', 'Food/Beverage'),
    ('Hardware/IoT', 'Hardware/IoT'),
    ('Wellness and Fitness', 'Wellness and Fitness'),
    ('Helth Care', 'Helth Care'),
    ('Hospitality', 'Hospitality'),
    ('Human Resources', 'Human Resources'),
    ('IT/Services', 'IT/Services'),
    ('Law/Legal', 'Law/Legal'),
    ('Logistics/Supply Chain', 'Logistics/Supply Chain'),
    ('Manufacturing/Industrial', 'Manufacturing/Industrial'),
    ('Marketing/Advertising/Sales', 'Marketing/Advertising/Sales'),
    ('Media', 'Media'),
    ('Nanotechnology', 'Nanotechnology'),
    ('Nonprofits', 'Nonprofits'),
    ('Oil/Energy', 'Oil/Energy'),
    ('Pharmaceuticals', 'Pharmaceuticals'),
    ('Real Estate/Construction', 'Real Estate/Construction'),
    ('Restaurants', 'Restaurants'),
    ('Retail', 'Retail'),
    ('SaaS', 'SaaS'),
    ('Services', 'Services'),
    ('Sports', 'Sports'),
    ('Telecommunication', 'Telecommunication'),
    ('Transport/Mobility', 'Transport/Mobility'),
    ('Technology', 'Technology'),
    ('Travel', 'Travel'),
    ('User Experience Design', 'User Experience Design'),
    ('Venture for Goods', 'Venture for Goods'),
    )
    industry_choice = models.CharField(max_length=255,choices=INDUSTRY_CHOICES, blank=True, null=True)
    event = models.CharField(max_length=255, blank=True, null=True)
    PROFILES = (
    ('Software development','Software development'),
    ('Product management','Product management'),
    ('Investment Research','Investment Research'),
    ('Business analyst','Business analyst'),
    ('Data Analysis','Data Analysis'),
    ('ML','ML'),
    ('Android App Development','Android App Development'),
    ('Web Development','Web Development'),
    ('Sales and Marketing','Sales and Marketing'),
    ('Business development','Business development'),
    ('Content creation','Content creation'),
    ('Social Media Marketing','Social Media Marketing'),
    ('Research & Development','Research & Development'),
    ('Finance','Finance'),
    ('Operations','Operations'),
    ('Back End development','Back End development'),
    ('Design','Design'),
    ('Supply Chain Management','Supply Chain Management'),
    ('Front End development','Front End development'),
    ('UI/UX Development','UI/UX Development'),
    )
    intern_profile = models.CharField(max_length=255,choices=PROFILES, blank=True, null=True)

    def __str__(self):
        return f'{self.user.email}'
