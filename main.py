import streamlit as st

st.set_page_config(page_title="EqualMatch AI", layout="centered")

st.title("🎯 EqualMatch AI - Prototype Demo")
st.subheader("Ethical AI-based Job Matchmaking for Students")

tab1, tab2 = st.tabs(["👩‍🎓 Student View", "🏢 Employer View"])

with tab1:
    st.header("Student Job Finder")
    name = st.text_input("Your Name")
    skills = st.text_area("List your skills (comma separated)", "Python, HTML, Public Speaking")
    interests = st.text_input("Career Interests", "NGO, Web Dev, Remote Work")
    st.markdown("---")
    
    if st.button("Find Top Job Matches"):
        st.success("Top 3 Job Matches")
        st.write("🔹 **NGO Web Assistant** — Matched due to *Python + NGO interest + Remote preference*")
        st.write("🔹 **Frontend Developer Intern** — Matched due to *HTML + Web Dev interest*")
        st.write("🔹 **Community Outreach Analyst** — Matched due to *Public Speaking + NGO interest*")

with tab2:
    st.header("Employer Skill Card Viewer")
    st.info("Anonymized candidate skill cards for fair hiring")
    st.write("👤 Candidate #112")
    st.write("🛠️ Skills: Python, HTML, Communication")
    st.write("🎯 Match %: 82%")
    st.write("💬 Reason: Project experience + Aligned goals")
    st.button("Request Contact")
