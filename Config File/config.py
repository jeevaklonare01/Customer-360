# config.py
# Configuration file for removing proxy columns from formatting_data.csv in Colab

# File paths
INPUT_FILE = "/content/formatting_data.csv"  # Path in Colab's filesystem
OUTPUT_FILE = "/content/filtered_formatting_data_no_proxies.csv"

# List of proxy columns for 'will purchase' to remove
PROXY_COLUMNS = [
    "Total Completed Purchase Value",
    "Payments Successful",
    "Payments Attempted",
    "Checkout Initiated",
    "Add to Cart Count",
    "Purchase Stage",
    "Last Purchase Date",
    "Total Orders in Time Slot",
    "Quantity Sold",
    "Purchase Frequency",
    "Transaction Amount",
    "Total Units",
    "Product Page Visits",
    "Page Views",
    "Time Spent (min)",
    "Engagement Score",
    "Newsletter Opened",
    "Social Media Share",
    "Ad Clicks",
    "Impressions",
    "Wishlist Adds",
    "Product Views",
    "Loyalty Program Member",
    "Loyalty Effect on Purchase",
    "Churned",
    "Churn Risk",
    "Repeat Purchase Rate",
    "Repeat Purchase Decline",
    "Reactivated Customers (Per Campaign)",
    "Discount Applied",
    "Coupon Code Usage",
    "Promotional Elasticity",
    "Total Floated Coupon",
    "Campaign Exposure",
    "Product Rating",
    "Stock Availability",
    "Shelf Space Allocation",
    "Support Queries",
    "Impact of Support Quality on Repeat Purchases",
    "Average Resolution Time",
    "Average Response Time",
    "Ticket Resolution Time",
    "Cart Abandoned",
    "Checkout Abandoned",
    "Payment Failure",
    "Return Flag",
    "Defective Flag",
    "Subscription Cancelled",
    "Age",
    "Income Group",
    "Customer Segment",
    "Customer Segment Type",
    "Channel",
    "Referral Source",
    "Region",
    "Avg Order Value",
    "Profit Margin (%)",
    "Total Revenue",
    "Gross Profit",
    "Net Profit",
    "Cost per Acquisition (CPA)",
    "Cost per Channel",
    "Order Fulfillment Time"
]

# How to handle missing columns when dropping
HANDLE_MISSING_COLUMNS = "ignore"  # Options: "ignore" (skip missing columns), "raise" (raise error)

# Reference for target definition
TARGET_DEFINITION = "Transaction Date > 2024-10-01"